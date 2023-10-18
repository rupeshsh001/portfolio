"use client";
import React from "react";
import { FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const socialMediaLogo = [
    <FaPhone
        className="cursor-pointer text-4xl text-secondary"
        key="phone"
        onClick={() => alert("You can Call me on 7703968162")}
    />,
    <a href="https://www.linkedin.com/in/rupeshsharma001/" key="linkedin" target="_blank">
        <FaLinkedin className="cursor-pointer text-4xl text-[#0A66C2]" />
    </a>,
    <a href="https://github.com/rupeshsh001" key="github" target="_blank">
        <FaGithub className="cursor-pointer text-4xl text-black" />
    </a>,
    <a href="https://mail.google.com/mail/u/0/?fs=1&to=rupeshss001@gmail.com&tf=cm" key="github" target="_blank">
        <BiLogoGmail className="cursor-pointer text-4xl text-red-500" />
    </a>,
];

const SideBar = () => {
    return (
        <div className="hidden sm:block w-16 h-64 absolute top-1/2 left-0 transform -translate-y-1/2 rounded-md bg-primary brightness-110">
            <div className="h-full p-1">
                {socialMediaLogo.map((logo, index) => {
                    return (
                        <div key={index} className="flex justify-center items-center h-1/4">
                            {logo}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SideBar;
