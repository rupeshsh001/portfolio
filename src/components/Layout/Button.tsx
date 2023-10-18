"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Button: React.FC<{ title: string }> = ({ title }) => {
    const router = useRouter();

    const handleNavigate = (pathname: string) => {
        router.push(`/${pathname}`);
    };
    return (
        <button className="btn-css" onClick={() => handleNavigate(title)}>
            {title}
        </button>
    );
};

export default Button;
