import React from "react";
import { getIcon } from "./technologyIcons";
import Link from "next/link";

interface SocialMediaProps {
    className?: string;
    size?: number;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ className, size = 40 }) => {
    const githubIcon = getIcon("github", size);
    const linkedinIcon = getIcon("linkedin", size);
    const emailIcon = getIcon("email", size);

    return (
        <nav className={`flex lg:justify-evenly justify-between mt-8 ${className}`}>
            <Link
                href={`mailto:${process.env.EMAIL_ADDRESS}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-500 cursor-pointer transition-colors duration-300"
            >
                {emailIcon}
            </Link>
            <Link
                href={`${process.env.LINKEDIN_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-500 cursor-pointer transition-colors duration-300"
            >
                {linkedinIcon}
            </Link>
            <Link
                href={`${process.env.GITHUB_URL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-500 cursor-pointer transition-colors duration-300"
            >
                {githubIcon}
            </Link>
        </nav>
    );
};

export default SocialMedia;
