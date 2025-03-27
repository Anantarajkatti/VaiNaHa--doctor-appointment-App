import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctors from "../components/RelatedDoctors";

function Appointment() {
  const { docId } = useParams();
  const { doctors, currencySymbol } = useContext(AppContext);
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState(false);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  // const navigate = useNavigate()

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSolts = async () => {
    setDocSlots([]);

    // getting current date
    let today = new Date();

    for (let i = 0; i < 7; i++) {
      // getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // console.log("current date", currentDate.getDate())////*

      // setting end time of the date with index // ???
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);
      // console.log("endtime", endTime)  //* todays end time

      // setting hours
      if (today.getDate() === currentDate.getDate()) {
        // console.log("same date")
        currentDate.setHours(
          currentDate.getHours() > 10
            ? currentDate.getMinutes() > 30
              ? currentDate.getHours() + 1
              : currentDate.getHours()
            : 10
        );

        currentDate.setMinutes(
          currentDate.getMinutes() > 0 && currentDate.getMinutes() < 30 ? 30 : 0
        );
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        // let day = currentDate.getDate()
        // let month = currentDate.getMonth() + 1
        // let year = currentDate.getFullYear()

        // const slotDate = day + "_" + month + "_" + year
        // const slotTime = formattedTime
        // console.log(docInfo.slots_booked[slotDate])

        // const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

        // if (isSlotAvailable) {

        // Add slot to array
        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        });
        // }

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // console.log("doc slots are set")
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    if (doctors.length > 0) {
      fetchDocInfo();
    }
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSolts();
  }, [docInfo]);

  console.log(docSlots);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    <div>
      {/* ---------- Doctor Details ----------- */}
      {/* On sm screens (≥ 640px) → flex-row (laid out horizontally) */}
      <div className="flex  flex-col   p-8 py-7 sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={docInfo.image}
            alt=""
          />
        </div>

        <div className="flex-1  p-8 py-7 bg-white mx-2 sm:mx-0 mt-[0px] sm:mt-0">
          {/* ----- Doc Info : name, degree, experience ----- */}

          <p className="flex items-center gap-2 sm:text-3xl font-medium text-gray-700">
            {docInfo.name}{" "}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 mt-1 text-gray-600">
            <p>
              {docInfo.degree} - {docInfo.speciality}
            </p>
            <button className="py-0.5 px-2 border text-xs rounded-full">
              {docInfo.experience}
            </button>
          </div>

          {/* ----- Doc About ----- */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-[#262626] mt-3">
              About <img className="w-3" src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-600 max-w-[700px] mt-1">
              {docInfo.about}
            </p>
          </div>

          <p className="text-gray-600 font-medium mt-4">
            Appointment fee:{" "}
            <span className="text-gray-800">
              {currencySymbol}
              {docInfo.fees}
            </span>{" "}
          </p>
        </div>
      </div>

      {/* Booking slots */}
      <div className="sm:ml-72 sm:pl-4 mt-8 font-medium text-[#565656]">
        <p>Booking slots</p>
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
          {docSlots.length &&
            docSlots.map((item, index) => {
              {
                /* console.log(item[0]); */
              }
              console.log(item[0] && daysOfWeek[item[0].datetime.getDay()]);
              return (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-[#DDDDDD]"
                  }`}
                >
                  {/* &&: A logical AND (&&) operator is used here for conditional rendering. If item[0] exists (i.e., it's not null, undefined, or false), then the right-hand expression will be evaluated and printed. */}
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              );
            })}
        </div>

        <div className=" flex flex-wrap items-center gap-3 w-full  mt-4 ">
          {docSlots.length &&
            docSlots[slotIndex].map((item, index) => (
              <p
                onClick={() => setSlotTime(item.time)}
                key={index}
                className={`text-sm font-light  flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                  item.time === slotTime
                    ? "bg-primary text-white"
                    : "text-[#949494] border border-[#B4B4B4]"
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        {slotTime ? (
          <div className="m-5">
            <p> Tell me what you Feel</p>
            <textarea
              className="border border-gray w-full text-gray"
              rows="4"
              cols="50"
              placeholder="Enter your text here..."
            ></textarea>
          </div>
        ) : null}

        <button
          onClick={() => {
            console.log(
              slotTime,
              daysOfWeek[docSlots[slotIndex].datetime.getDay()],
              docInfo.name
            );
          }}
          className="bg-primary text-white text-sm font-light px-20 py-3 rounded-full my-6"
        >
          Book an appointment
        </button>
      </div>

      <RelatedDoctors speciality={docInfo.speciality} docId={docId} />
    </div>
  );
}

export default Appointment;
