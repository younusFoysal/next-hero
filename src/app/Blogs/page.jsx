import React from 'react';
import Link from "next/link";

const BlogsPage = () => {
    return (
        <div className="p-24">
           Blogs
            <Link href="Blogs/specialblog">Special Blog</Link>

            {
                blogs.map((blog, index) => <div key={index} className="border p-12">
                    <h3>{blog.title}</h3>
                    <h4>{blog.description}</h4>
                    <button className="bg-green-600 p-3"><Link href={`Blogs/${blog.slug}`}>View Details...</Link></button>

                </div>)
            }

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

export default BlogsPage;