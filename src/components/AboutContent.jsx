import React from 'react';
import Link from "next/link";

const AboutContent = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full">
            This is about content.
            <Link href="about/history">History</Link>
            <Link href="about/mission">Mission</Link>
        </div>
    );
};

export default AboutContent;