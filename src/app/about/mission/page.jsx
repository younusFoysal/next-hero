import React from 'react';
import Link from "next/link";

const MissionPage = () => {
    return (
        <div>
            This is a mission page.
            <Link href="mission/vision">Vision</Link>

{/*
            http://localhost:3000/about/mission/vision
*/}
            
        </div>
    );
};

export default MissionPage;