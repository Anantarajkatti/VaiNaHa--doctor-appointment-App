import React, { useState } from "react";
import { assets } from "../assets/assets_frontend/assets";

function MyProfile() {
  const [userData, setUserData] = useState({
    name: "karthikeyan M",
    image: assets.profile_Ind,
    email: "karthikeyanm@gmail.com",
    phone: "+91-7645423189",
    address: {
      line1: "7th cross, kamakshi palya",
      line2: "Bengaluru",
    },
    gender: "male",
    dob: "2000-07-12",
  });

  const [isEdit, setIsEdit] = useState(false);

  return (
    <div className="max-w-full flex  gap-2 text-sm pt-5 justify-center">
      <div className="  ">
        <img
          className=" border w-40 h-40 border-black  rounded-full object-cover object-top"
          src={userData.image}
          alt="image"
        />
      </div>
      <div className="m-5 p-5">
        {isEdit ? (
          <input
            className="bg-gray-50 text-3xl font-medium max-w-60"
            type="text"
            onChange={(e) =>
              setUserData((prev) => ({ ...prev, name: e.target.value }))
            }
            value={userData.name}
          />
        ) : (
          <p className="font-medium text-3xl text-[#262626] mt-4">
            {userData.name}
          </p>
        )}

        <hr className="bg-[#ADADAD] h-[1px] border-none" />

        <div>
          <p className="text-gray-600 underline mt-3">CONTACT INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]">
            <p className="font-medium">Email id:</p>
            <p className="text-blue-500">{userData.email}</p>
            <p className="font-medium">Phone:</p>

            {isEdit ? (
              <input
                className="bg-gray-50 max-w-52"
                type="text"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, phone: e.target.value }))
                }
                value={userData.phone}
              />
            ) : (
              <p className="text-blue-500">{userData.phone}</p>
            )}

            <p className="font-medium">Address:</p>

            {isEdit ? (
              <p>
                <input
                  className="bg-gray-50"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line1: e.target.value },
                    }))
                  }
                  value={userData.address.line1}
                />
                <br />
                <input
                  className="bg-gray-50"
                  type="text"
                  onChange={(e) =>
                    setUserData((prev) => ({
                      ...prev,
                      address: { ...prev.address, line2: e.target.value },
                    }))
                  }
                  value={userData.address.line2}
                />
              </p>
            ) : (
              <p className="text-gray-500">
                {userData.address.line1} <br /> {userData.address.line2}
              </p>
            )}
          </div>
        </div>
        <div>
          <p className="text-[#797979] underline mt-3">BASIC INFORMATION</p>
          <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600">
            <p className="font-medium">Gender:</p>

            {isEdit ? (
              <select
                className="max-w-20 bg-gray-50"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, gender: e.target.value }))
                }
                value={userData.gender}
              >
                <option value="Not Selected">Not Selected</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p className="text-gray-500">{userData.gender}</p>
            )}

            <p className="font-medium">Birthday:</p>

            {isEdit ? (
              <input
                className="max-w-28 bg-gray-50"
                type="date"
                onChange={(e) =>
                  setUserData((prev) => ({ ...prev, dob: e.target.value }))
                }
                value={userData.dob}
              />
            ) : (
              <p className="text-gray-500">{userData.dob}</p>
            )}
          </div>
        </div>
        <div className="mt-10">
          {isEdit ? (
            <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all">
              Save information
            </button>
          ) : (
            <button
              onClick={() => setIsEdit(true)}
              className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
