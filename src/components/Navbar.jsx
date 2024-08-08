"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useRouter} from "next/navigation";
import {signOut, useSession} from "next-auth/react";
import Image from "next/image";

const Navbar = () => {

    const pathName = usePathname();
    const router = useRouter();
    const session = useSession();
    console.log(session)

    const links = [
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Gallery",
            path: "/gallery",
        },
        {
            title: "Blogs",
            path: "/Blogs",
        },
        {
            title: "Posts",
            path: "/posts",
        },
        {
            title: "Meals",
            path: "/meals",
        },
        {
            title: "Services",
            path: "/services",
        },
        {
            title: "Categories",
            path: "/categories", 
        },
        {
            title: "Dashboard",
            path: "/dashboard",
        },
        {
            title: "Contacts",
            path: "/contacts",
        }
    ]

    const handler = () => {
        router.push("/login");
    }

    const handlerlogin = () => {
        router.push("/api/auth/signup");
    }


    if (pathName.includes('dashboard'))
        return (
            <div className="bg-green-600 p-6 flex flex-row justify-between">
                <h6 className="text-3xl"><Link href={'/'}>Next <span className="text-lime-300">Hero</span> </Link></h6>
                <h6>
                    Dashboard layout
                </h6>

                <div className="flex flex-row items-center space-x-2">
                    <Image height={30} width={30} src={session?.data?.user?.image} alt={session?.data?.user?.name}/>
                    <h6>
                        {session?.data?.user?.name}
                    </h6>
                    <p>|</p>
                    <h6>
                        {session?.data?.user?.type}
                    </h6>

                    {
                        session.status === "authenticated"
                            ?
                            <button
                                onClick={() => signOut()}
                                className="bg-white text-lime-600 p-2 rounded hover:bg-lime-600 hover:text-white">
                                Logout
                            </button>
                            :
                            <>
                                <button
                                    onClick={handler}
                                    className="bg-white text-lime-600 p-2 rounded hover:bg-lime-600 hover:text-white">
                                    Login
                                </button>

                                <button
                                    onClick={handlerlogin}
                                    className="bg-white text-lime-600 p-2 rounded hover:bg-lime-600 hover:text-white">
                                    SignUp
                                </button>

                            </>


                    }
                </div>


            </div>
        )

    return (
        <nav className="bg-emerald-600 px-6 py-4 flex items-center justify-between">
        <h6 className="text-3xl"> <Link href={'/'}>Next <span className="text-lime-300">Hero</span> </Link></h6>
            <ul className="flex justify-between items-center space-x-4">
                {/*<li><Link href={'/about'}>About</Link></li>*/}
                {/*<li><Link href={'/services'}>Service</Link></li>*/}
                {/*<li><Link href={'/contacts'}>Contact</Link></li>*/}

                {
                    links?.map(link => <Link className={`${pathName === link.path && "text-lime-300"}`} key={link.path} href={link.path}>{link.title}</Link>)
                }

            </ul>

            <div className="flex flex-row items-center space-x-2">
                <Image height={30} width={30} src={session?.data?.user?.image} alt={session?.data?.user?.name} />
                <h6>
                    {session?.data?.user?.name}
                </h6>
                <p>|</p>
                <h6>
                    {session?.data?.user?.type}
                </h6>
            </div>

            {
                session.status === "authenticated"
                    ?
                    <button
                        onClick={() => signOut()}
                        className="bg-white text-lime-600 p-2 rounded hover:bg-lime-600 hover:text-white">
                        Logout
                    </button>
                    :
                    <div className="flex flex-row items-center space-x-2">
                        <button
                            onClick={handler}
                            className="bg-white text-lime-600 p-2 rounded hover:bg-lime-600 hover:text-white">
                            Login
                        </button>

                        <button
                            onClick={handlerlogin}
                            className="bg-white text-lime-600 p-2 rounded hover:bg-lime-600 hover:text-white">
                            SignUp
                        </button>

                    </div>

            }

        </nav>
    );
};

export default Navbar;