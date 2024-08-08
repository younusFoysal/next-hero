import {redirect} from "next/navigation";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

export const getPosts = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
    const data = await response.json();
    //console.log(data);

    // condition based redirect
    // if (data) {
    //     redirect(`/posts/${data[0].id}`);
    // }


    return data;
}

export const getPost = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`);
    const data = await response.json();
    //console.log(data);
    return data;
}