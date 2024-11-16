"use client";
import Image from "next/image";
import img from "/public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menu } from "@/data/data";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleMenu = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header className="sticky top-0 py-4 bg-black z-50 mb-20 md:mb-0 shadow-xl">
            {/* Desktop header */}
            <div className="max-w-[92%] mx-auto md:block hidden">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <Image src={img} alt="logo" height={50} />
                        </Link>
                    </div>
                    <nav>
                        <ul className="flex items-center justify-center gap-12">
                            {menu.map((curr: any) => (
                                <li key={curr.id} className="relative">
                                    <Link
                                        href={curr.url === "home" ? "/" : `/${curr.url}`}
                                        className={`text-base hover:text-yellow-500 hover:after:content-[''] hover:after:top-7 hover:after:left-0 hover:after:right-2 hover:after:bottom-0 hover:after:mx-auto hover:after:w-[100%] hover:after:h-1 hover:after:bg-yellow-500 hover:after:absolute`}
                                    >
                                        {curr.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-6">
                        <Link href='https://www.linkedin.com/in/muhammad-ammar-shaikh-27788228b' target="_blank"><LinkedInIcon /></Link>
                        <Link href='https://github.com/ammarshaikh22' target="_blank"><GitHubIcon /></Link>
                    </div>
                </div>
            </div>
            {/* Mobile or tablet header */}
            <div className="flex justify-between max-w-[92%] mx-auto md:hidden items-center">
                <div>
                    <Link href="/">
                        <Image src={img} alt="logo" height={50} />
                    </Link>
                </div>
                <span onClick={handleMenu} className="z-30 text-xl cursor-pointer">
                    {!isOpen ? <MenuIcon /> : <CloseIcon />}
                </span>
                <div
                    className={`p-12 fixed top-0 right-0 h-full w-[80%] bg-black bg-opacity-100 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <nav className="flex justify-center items-center h-full">
                        <ul className="flex flex-col justify-center gap-10">
                            {menu.map((curr, ind) => (
                                <li key={ind} className="relative">
                                    <Link
                                        href={curr.url === "home" ? "/" : `/${curr.url}`}
                                        onClick={(e) => setIsOpen(!isOpen)}
                                        className={`text-base hover:text-yellow-500 hover:after:content-[''] hover:after:top-7 hover:after:left-0 hover:after:right-2 hover:after:bottom-0 hover:after:mx-auto hover:after:w-[100%] hover:after:h-1 hover:after:bg-yellow-500 hover:after:absolute`}
                                    >
                                        {curr.name}
                                    </Link>
                                </li>
                            ))}
                            <div className="flex items-center gap-6">
                                <Link href='https://www.linkedin.com/in/muhammad-ammar-shaikh-27788228b' target="_blank"><LinkedInIcon /></Link>
                                <Link href='https://github.com/ammarshaikh22' target="_blank"><GitHubIcon /></Link>
                            </div>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
