/** @format */

import React from "react";

import SlackIcon from "../assets/SlackIcon.svg";
import GitHubIcon from "../assets/GitHubIcon.svg";

const SocialLinks = () => {
  return (
    <>
      {/* <ReactTooltip id="slackProfileTip" place="top" effect="solid">
        BeyondLogic
      </ReactTooltip>
      <ReactTooltip id="githubProfileTip" place="top" effect="solid">
        Beyond-Logic
      </ReactTooltip> */}
      <div className="flex justify-center space-x-[36.75px] mb-[136.55px] items-center">
        <div className="flex justify-center items-center space-x-2">
          <img
            src={SlackIcon}
            alt="slack"
            id="slack"
            className="cursor-pointer"
            // data-tip
            // data-for="slackProfileTip"
          />
          <p id="slack" className="hidden">
            BeyondLogic
          </p>
        </div>

        <a
          href="https://github.com/Beyond-Logic"
          id="github"
          className="cursor-pointer"
        >
          <img
            src={GitHubIcon}
            alt="github"
            // data-tip
            // data-for="githubProfileTip"
          />
        </a>
      </div>
    </>
  );
};

export default SocialLinks;

