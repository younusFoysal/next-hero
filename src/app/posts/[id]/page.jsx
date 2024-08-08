import React from 'react';
import {getPost, getPosts} from "@/app/allApi/postApi";

// https://jsonplaceholder.typicode.com/posts/1


// Dynamic keywords for SEO
export const generateMetadata = async ({params}) => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json();

    return {
        title: ` ${data.title}`,
        description: `${data.body}`,
        keywords: data.body.split(' ')
    }
}

const postDetailsPage = async ({params}) => {

    const post = await getPost(params.id);
    console.log(post);

    console.log(params.id)
    return (
        <div>
            Post Details of {params.id}
            <div className="border p-4">
                Title: {post.title}
            </div>
            <div className="border p-4">
                Description: {post.body}
            </div>
            
        </div>
    );
};

export default postDetailsPage;