import React from 'react';
import Image from "next/image";

const Page = () => {
    return (
        <div className="min-h-screen px-12 py-24">
            <h6 className="text-3xl mb-12">Gallery Page</h6>

            <div className="grid grid-cols-3 gap-8">
                {
                    [1,2,3,4,5]?.map((img) => (
                        <Image
                            key={img}
                            src={`/images/${img}.jpg`}
                            alt="Gallery Image"
                            height="1080"
                            width="1080"
                        />
                    ) )
                }
            </div>


            
        </div>
    );
};

export default Page;