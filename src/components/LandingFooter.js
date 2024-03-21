import React from 'react';
import { GrShieldSecurity } from "react-icons/gr";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { TbClockPlus } from "react-icons/tb";

function LandingFooter() {
  return (

    <div className="flex items-center sm:flex-row justify-center gap-10 pb-4">
      <div className="flex items-center  sm:mb-0">
        <p className="p-2 text-2xl sm:text-3xl"><GrShieldSecurity /></p>
        <p>|</p>
        <p className="ml-2 text-base sm:text-lg">Security</p>
      </div>
      <div className="flex items-center  sm:mb-0">
        <p className="p-2 text-2xl sm:text-3xl"><LiaUserFriendsSolid /></p>
        <p>|</p>
        <p className="ml-2 text-base sm:text-lg">Friendly</p>
      </div>
      <div className="flex items-center  sm:mb-0">
        <p className="p-2 text-2xl sm:text-3xl"><MdOutlinePrivacyTip /></p>
        <p>|</p>
        <p className="ml-2 text-base sm:text-lg">Privacy</p>
      </div>
      <div className="flex items-center">
        <p className="p-2 text-2xl sm:text-3xl"><TbClockPlus /></p>
        <p>|</p>
        <p className="ml-2 text-base sm:text-lg">Efficient</p>
      </div>
    </div>
    
  );
}

export default LandingFooter;
