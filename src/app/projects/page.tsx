import React from "react";
import ProjectCard from "~/components/Cards/ProjectCards";
import { promises as fs } from "fs";
import { projectType } from "~/types/project.types";

const Projects = async () => {
    const { ProjectsDetails } = await fs
        .readFile(process.cwd() + "/src/constants/projectDetails.json", "utf8")
        .then((data) => JSON.parse(data));

    return (
        <div className="flex justify-center w-full flex-col items-center pb-5">
            <h1 className="text-3xl font-bold">
                PROJECT <span className="text-secondary">OVERVIEW</span>
            </h1>
            <div className="w-full">
                {ProjectsDetails.map((project: projectType) => (
                    <div key={project.clientName} className="project-card">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
