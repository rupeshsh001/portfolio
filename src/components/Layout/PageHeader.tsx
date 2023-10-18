import Link from "next/link";
import React from "react";

const PageHeader = () => {
    return (
        <header className="py-5 flex justify-between items-center">
            <div>
                <Link href="/" className="text-4xl font-bold">
                    Rupesh.
                </Link>
            </div>

            <nav className="flex space-x-16">
                <Link href="/about" className="nav-btn">
                    About
                </Link>
                <Link href="/skills" className="nav-btn">
                    Skills
                </Link>
                <Link href="/projects" className="nav-btn">
                    Projects
                </Link>
                <Link href="/contact" className="nav-btn">
                    Contact
                </Link>
            </nav>
        </header>
    );
};

export default PageHeader;
