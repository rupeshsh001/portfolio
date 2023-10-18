import React from "react";
import { promises as fs } from "fs";
import { skillsType } from "~/types/skills.type";

const Skills = async () => {
    const { skillsArray } = await fs
        .readFile(process.cwd() + "/src/constants/skillsDetails.json", "utf8")
        .then((data) => JSON.parse(data));

    return (
        <div className="flex justify-center w-full flex-col items-center pb-5">
            <h1 className="text-3xl font-bold">
                MY <span className="text-secondary">SKILLS</span>
            </h1>
            <div className="w-full min-h-[400px] border-2 border-secondary mt-[20px] flex flex-wrap bg-primary">
                {skillsArray.map((skills: skillsType) => (
                    <div
                        className="w-full sm:w-[calc(50%-40px)] shadow-xl m-5 p-5 hover:shadow-md hover:shadow-secondary transition-all duration-500 bg-primary"
                        key={skills.skill}
                    >
                        <div className="flex justify-between">
                            <span className="font-bold text-xl">{skills.skill}</span>
                            <span className="font-bold text-xl text-gray-400">{skills.rating}</span>
                        </div>
                        <div className="flex items-center mt-4">
                            <div className="w-full h-4 rounded-full bg-gray-700">
                                <div
                                    className="h-4 bg-secondary rounded-full"
                                    style={{ width: `${10 * skills.rating}%` }}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
