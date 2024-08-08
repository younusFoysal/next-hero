import React from 'react';
import {getPosts} from "@/app/allApi/postApi";
import Link from "next/link";



const postPage = async () => {

    const post = await getPosts();

    return (
        <div className="">
            <h6>All Posts</h6>
            <div className="grid grid-cols-4 gap-6">
                {post?.slice(0, 10)?.map(({title, body, id}) => (
                    <div key={id} className="border-2 p-6">
                        <h6 className="font-bold">Title: {title}</h6>
                        <br/>
                        <hr/>
                        <p>Description: {body}</p>
                        <button className="btn border bg-green-600 p-2"><Link href={`/posts/${id}`}>Details</Link></button>
                    </div>
                ))}
            </div>
            Post Page
        </div>
    );
};

export default postPage;