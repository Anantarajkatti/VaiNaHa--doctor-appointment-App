import React from "react";
import { assets } from "../assets/assets_frontend/assets";

function Contact() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-[#707070]">
        <p>
          CONTACT <span className="text-gray-700 font-semibold">US</span>
        </p>
      </div>

      <div className="my-12 flex flex-col md:flex-row gap-14 items-center px-6">
        {/* Office Image */}
        <img
          className="w-full md:max-w-[400px] rounded-lg shadow-md"
          src={assets.contact_image}
          alt="Office"
        />

        {/* Contact & Careers Info */}
        <div className="flex flex-col justify-center items-start gap-6 bg-gray-50 p-8 rounded-lg shadow-md w-full md:max-w-[500px]">
          {/* Office Details */}
          <div>
            <p className="text-xl font-semibold text-gray-700 uppercase tracking-wide">
              Our Headquarters
            </p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              22nd Floor, Vision Tower <br /> Tech Park, Bengaluru - 560102
            </p>
            <p className="text-gray-600 mt-1">
              📞 (+91) 98765 43210 <br /> ✉️ support@vainyahealth.com
            </p>
          </div>

          {/* Careers Section */}
          <div>
            <p className="text-xl font-semibold text-gray-700 uppercase tracking-wide">
              Join Our Team
            </p>
            <p className="text-gray-600 mt-2 leading-relaxed">
              Looking for passionate individuals to shape the future of
              healthcare.
            </p>
            <button className="border border-gray-800 text-gray-800 px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 hover:text-white transition-all duration-300 mt-3">
              Explore Careers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
