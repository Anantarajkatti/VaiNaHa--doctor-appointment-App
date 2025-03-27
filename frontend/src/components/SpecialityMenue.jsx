import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

function SpecialityMenue() {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-6 py-16 text-[#262626] bg-gray-50"
    >
      {/* Title & Description */}
      <h1 className="text-3xl font-semibold text-gray-800">
        Find by Speciality
      </h1>
      <p className="sm:w-2/5 text-center text-sm text-gray-600 leading-relaxed">
        Explore our wide range of trusted specialists and book your appointment
        effortlessly.
      </p>

      {/* Speciality Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-5 w-full max-w-5xl">
        {specialityData.map((item, index) => (
          <Link
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            key={index}
            className="group flex flex-col items-center p-4 bg-white shadow-md rounded-lg transform transition-all duration-500 hover:scale-105 hover:shadow-lg"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24">
              <img
                className="w-full h-full object-cover rounded-full border-2 border-gray-200 group-hover:border-primary transition-all duration-300"
                src={item.image}
                alt=""
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700 group-hover:text-primary transition-all">
              {item.speciality}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SpecialityMenue;
