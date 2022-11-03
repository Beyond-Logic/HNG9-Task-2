/** @format */

import React, { useState } from "react";
import ProfilePhoto from "../assets/EdemaEroPicture.jpg";
import MenuIcon from "../assets/MenuIcon";
import ShareIcon from "../assets/ShareIcon";
import CameraIcon from "../assets/CameraIcon.svg";
import ReactTooltip from "react-tooltip";

const ProfileCard = () => {
  const [isShown, setIsShown] = useState(false);
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="relative lg:w-[65%] md:w-[70%] m-auto">
      <ReactTooltip id="shareProfileTip" place="left" effect="solid">
        Share Profile
      </ReactTooltip>

      <div className="flex flex-col justify-center items-center">
        <div className="relative">
          <img
            src={ProfilePhoto}
            id="profile__img"
            alt="profile__img"
            className="w-[88px] h-[88px] rounded-full"
          />
          {showCamera && (
            <div className="absolute right-8 bottom-3 z-20 w-[24px] h-[24px] pointer-events-none">
              <img src={CameraIcon} alt="camera-icon" className="" />
            </div>
          )}
          <div
            className="absolute hover:bg-[#344054BF] z-10 w-[88px] h-[88px] rounded-full top-0 bottom-0 hover:opacity-[0.75] cursor-pointer"
            onMouseEnter={() => setShowCamera(true)}
            onMouseLeave={() => setShowCamera(false)}
          ></div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h5
            id="twitter"
            className="mt-[24px] font-bold md:text-[20px] text-[18px] md:leading-[30px] leading-[28px] text-[#101828] text-center"
          >
            BeyondLogic
          </h5>
          <h5 id="slack" className="hidden">
            BeyondLogic
          </h5>
        </div>
      </div>
      <div className="absolute right-0 top-0">
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <ShareIcon
            className="-mt-6 hidden md:flex cursor-pointer"
            id="share__icon"
            strokeDottedArray={isShown ? "0" : "1 3"}
          />
        </div>
        <div
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <MenuIcon
            id="menu__icon"
            className="-mt-6 flex md:hidden cursor-pointer"
            strokeDottedArray={isShown ? "0" : "1 3"}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
