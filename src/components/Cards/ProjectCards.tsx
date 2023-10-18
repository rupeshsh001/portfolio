import React from "react";
import { projectType } from "~/types/project.types";
const ProjectCard: React.FC<{ project: projectType }> = ({ project }) => {
    return (
        <div className="cursor-pointer p-3 hover:shadow-md rounded-lg border border-secondary m-2 hover:shadow-secondary transition-shadow duration-200 overflow-hidden">
            <div>
                <span className="project-timeline">{project.from}</span>
                <span className="project-timeline">-</span>
                <span className="project-timeline">{project.till}</span>
            </div>
            <div>
                <span className="font-bold text-[18px] capitalize">{project.clientName}</span>
                <span className="">-</span>
                <span className="font-bold text-[18px] capitalize">{project.companyName}</span>
            </div>
            <div>
                <div className="flex gap-1 uppercase font-bold">
                    <span>key</span>
                    <span className="text-[16px] text-secondary">responsibilities</span>
                </div>
                <ul className="list-disc px-5 text-secondary">
                    {project.keyResponsibilities.map((responsibility) => (
                        <li key={responsibility}>{responsibility}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;
