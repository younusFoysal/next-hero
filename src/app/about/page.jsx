import React from 'react';
import AboutContent from "@/components/AboutContent";
import {Headland_One} from "next/font/google";
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";




const headland_One = Headland_One({ weight: ['400'], subsets: ["latin"] });

const getTime = async () => {
    //const res = await fetch("http://localhost:3000/time", { cache: "no-store" });
    const res = await fetch("http://localhost:3000/time", { next: { revalidate : 5 } }); // re-fetch cache in every 5 sec
    const data = await res.json();
    return data.currentTime;
}

// A1ydHGvALYd8s42DOHCc2tT8wcE1gg+rxmqN2btIHg4=

// write the keywords for SEO
export const metadata = {
    title: "About",
    description: "Welcome to Next JS first App",
    keywords: ["Next JS first App", "about", "about page"]
};

const AboutPage = async () => {

    const currentTime = await getTime();
    const session = await getServerSession(authOptions)
    //Server console
    console.log({session})

    return (
        <div className={`${headland_One.className} px-4 py-5`}>
            <AboutContent></AboutContent>
            <p className="text-center">[NB: We are using custom front.]</p>
            <h3 className="text-3xl text-center text-red-400 mt-12">Time: {currentTime} </h3>
        </div>
    );
};

export default AboutPage;