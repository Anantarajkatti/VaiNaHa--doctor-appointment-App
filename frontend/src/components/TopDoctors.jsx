import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

function TopDoctors() {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center gap-6 my-16 text-[#262626] md:mx-10">
      {/* Title & Description */}
      <h1 className="text-3xl font-semibold text-gray-800">
        Top Doctors to Book
      </h1>
      <p className="sm:w-1/3 text-center text-sm text-gray-600">
        Browse through our extensive list of trusted doctors.
      </p>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item, index) => (
          <div
            key={index}
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-[#C9D8FF] rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 bg-white p-5 flex flex-col items-center"
          >
            {/* Round Profile Image */}
            <div className="relative w-50 h-50 sm:w-28 sm:h-28  overflow-hidden rounded-full border-4 border-[#EAEFFF] shadow-lg object-cover object-top">
              <img
                className="w-full h-full object-cover object-top"
                src={item.image}
                alt=""
              />
            </div>

            {/* Doctor Info */}
            <div className="mt-4 text-center">
              {/* Availability Status */}
              <div
                className={`flex items-center justify-center gap-2 text-sm ${
                  item.available ? "text-green-500" : "text-gray-500"
                }`}
              >
                <span
                  className={`w-3 h-3 rounded-full ${
                    item.available ? "bg-green-500" : "bg-gray-500"
                  }`}
                ></span>
                <p>{item.available ? "Available" : "Not Available"}</p>
              </div>

              {/* Name & Speciality */}
              <p className="text-[#262626] text-lg font-semibold mt-1">
                {item.name}
              </p>
              <p className="text-[#5C5C5C] text-sm">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-[#d0d9ff] transition-all"
      >
        View More
      </button>
    </div>
  );
}

export default TopDoctors;
