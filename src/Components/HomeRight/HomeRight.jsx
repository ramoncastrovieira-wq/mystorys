import React from "react";
import SuggetionCard from "./SuggetionCard";

const HomeRight = () => {
  return (
    <div className="flex flex-col">
      
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          
          <img
            className="w-12 h-12 rounded-full"
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt="profile"
          />

          <div className="ml-3">
            <p className="font-semibold">FullName</p>
            <p className="opacity-70 text-sm">username</p>
          </div>

        </div>

        <p className="text-blue-800 font-semibold cursor-pointer">Switch</p>
      </div>

      <div className="space-y-5 mt-10">
        {[1, 1, 1, 1, 1].map((item, index) => (
          <SuggetionCard key={index} />
        ))}
      </div>

    </div>
  );
};

export default HomeRight;