import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm">
        <div>
          <img className="mb-5 w-40" src={assets.vainaha} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            VaiNaHa, inspired by "Vaidyo Narayano Hari," is a seamless doctor
            appointment app that connects patients with trusted healthcare
            professionals. It offers easy booking, real-time availability, and
            personalized care, ensuring hassle-free medical consultations with a
            user-friendly experience.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>📞 (+91) 98765 43210</li>
            <li>✉️ support@vainyahealth.com</li>
          </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024 @ Vainaha.com - All Right Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
