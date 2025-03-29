import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function MyAppointment() {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      {doctors.slice(0, 2).map((item, index) => (
        <div
          className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
          key={index}
        >
          <div>
            <img className="w-32 bg-indigo-50" src={item.image} alt="" />
          </div>
          <div className="flex-1 text-sm text-zinc-600">
            <p className="text-neutral-800 font-semibold">{item.name}</p>
            <p>{item.speciality}</p>
            <p className="text-zinc-700 font-medium mt-1">Address:</p>
            <p className="text-xs">{item.address.line1}</p>
            <p className="text-xs">{item.address.line2}</p>
            <p className="text-xs mt-1">
              <span className="text-sm text-neutral-700 font-medium">
                Phone:
              </span>{" "}
              {item.phone}
            </p>
          </div>
          <div className="flex flex-col gap-2 justify-end">
            <div className="flex flex-col justify-center">
              <p className="text-sm text-zinc-600 text-center">
                Date :<span>25 Jan 2025</span>
              </p>
              <p className="text-sm text-zinc-600 text-center">
                Time :<span> 8:30</span>
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <button className="text-sm b-5 rounded-full text-stone-500 text-center sm:min-w-48 border border-black hover:bg-blue-700 hover:text-red-50">
                Pay Online
              </button>
              <button className="text-sm b-5 rounded-full text-stone-500 text-center sm:min-w-48 border border-black hover:bg-red-700 hover:text-red-50">
                Cancel
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MyAppointment;
