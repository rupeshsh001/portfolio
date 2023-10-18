import Image from "next/image";
import React from "react";
import SideBar from "~/components/Layout/SideBar";

const About = () => {
    return (
        <div className="flex justify-center w-full flex-col items-center">
            <SideBar />

            <h1 className="text-3xl font-bold">
                ABOUT <span className="text-secondary">ME</span>
            </h1>

            <div className="w-[250px] h-[250px] relative mt-20 ">
                <div className="w-full h-full border-secondary border-t-2 border-b-2 border-l-2 border-l-transparent border-r-2 border-r-transparent relative rounded-full animate-spin-slow"></div>
                <div className="make-it-center w-[200px] h-[200px] rounded-full overflow-hidden border-secondary border-2 ">
                    <Image
                        src="/rupesh.jpg"
                        alt="image here"
                        width={200}
                        height={200}
                        className="bg-cover brightness-50 hover:brightness-100 transition-all duration-200 cursor-pointer"
                    />
                </div>
            </div>

            <div className="mt-8">
                <h1 className="text-center font-bold text-2xl mb-2">FULLSTACK DEVELOPER</h1>
                <p className="max-w-[800px] font-semibold text-center">
                    I am a motivated and results-oriented MERN Stack Developer who is passionate about creating robust and
                    scalable web applications, with a strong focus on the front-end. With expertise in JavaScript, React, and
                    Next.js, I specialize in providing comprehensive solutions that go beyond the user interface. My
                    front-end skills, combined with a solid foundation in back-end technologies such as Node.js, MongoDB, and
                    Nest.js, enable me to deliver exceptional user experiences and seamlessly integrate them with reliable
                    server-side functionalities. Whether it&apos;s crafting engaging user interfaces or optimizing
                    performance, I am committed to pushing the boundaries of web development to deliver top-notch
                    applications.
                </p>
            </div>
        </div>
    );
};

export default About;
