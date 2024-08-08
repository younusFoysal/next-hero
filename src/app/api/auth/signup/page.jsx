"use client";

import React from 'react';

const Page = () => {
    const handleRegister = async (event) => {
        event.preventDefault();

        const newUser = {
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value,
            type: event.target.type.value,
            image: event.target.image.value,
        };
        console.log(newUser);

        try {
            const res = await fetch("http://localhost:3000/api/auth/signup/newUser", {
                method: "POST",
                body: JSON.stringify(newUser),
                headers: {
                    'Content-Type': 'application/json',
                },
            });


            //const data = await res.json();
            console.log(res);

        } catch (error) {
            console.error('There was a problem with the fetch operation:', error);
        }
    };

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Sign Up!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="email"
                                className="input input-bordered"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="password"
                                className="input input-bordered"
                                required
                            />

                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input
                                type="text"
                                name="image"
                                placeholder="Image Link"
                                className="input input-bordered"
                                required
                            />
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Role</span>
                            </label>
                            <select
                                className="select select-primary w-full max-w-xs"
                                    name="type"
                                    placeholder="Select a role"

                            >
                                <option disabled selected>Select Role</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                                <option value="seller">Seller</option>
                            </select>
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Page;
