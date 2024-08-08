import React from 'react';

const Page = ({params}) => {

    console.log(params);

    // const singleBlog = blogs.find(blog => blog.slug === params.slug);
    const {title, description} = blogs.find(blog => blog.slug === params.slug);

    return (
        <div>
            <p>Blog Title: {title}</p>
            <p>Blog: {description}</p>
        </div>
    );
};

const blogs = [
    {
        "slug": "tech-trends-24",
        "title": "Tech Trends",
        "description": "An in-depth look at the most exiting tech trends set to shape the year 2024."
    },
    {
        "slug": "tech-trends-25",
        "title": "Tech Trends",
        "description": "An in-depth look at the most exiting tech trends set to shape the year 2025."
    },
    {
        "slug": "tech-trends-26",
        "title": "Tech Trends",
        "description": "An in-depth look at the most exiting tech trends set to shape the year 2026."
    },
    {
        "slug": "tech-trends-27",
        "title": "Tech Trends",
        "description": "An in-depth look at the most exiting tech trends set to shape the year 2027."
    },
]

export default Page;