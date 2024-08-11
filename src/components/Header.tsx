"use client";
import Image from "next/image";
import img from "/public/logo.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { menu } from "@/data/data";
import { useRouter } from "next/navigation";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const router  = useRouter()
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const handleMenu = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const sections = document.querySelectorAll("section");
        const options = {
            root: null,
            threshold: 0.3,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            sections.forEach((section) => {
                observer.unobserve(section);
            });
        };
    }, [activeSection, setActiveSection]);
    return (
        <header className="fixed w-full py-4 h-[80px] bg-black z-50 mb-20 md:mb-0">
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
                                        className={`text-base ${activeSection === curr.url
                                            ? "text-yellow-500"
                                            : "text-white"
                                            } hover:text-yellow-500 hover:after:content-[''] hover:after:top-7 hover:after:left-0 hover:after:right-2 hover:after:bottom-0 hover:after:mx-auto hover:after:w-[100%] hover:after:h-1 hover:after:bg-yellow-500 hover:after:absolute`}
                                    >
                                        {curr.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
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
                    className={`p-12 fixed top-0 right-0 h-full w-[60%] bg-black bg-opacity-100 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
                        }`}
                >
                    <nav className="flex justify-center items-center h-full">
                        <ul className="flex flex-col justify-center gap-10">
                            {menu.map((curr, ind) => (
                                <li key={ind} className="relative">
                                    <Link
                                        href={curr.url === "home" ? "/" : `/${curr.url}`}
                                        onClick={(e) => setIsOpen(!isOpen)}
                                        className={`text-base ${activeSection === curr.url
                                            ? "text-yellow-500"
                                            : "text-white"
                                            } hover:text-yellow-500 hover:after:content-[''] hover:after:top-7 hover:after:left-0 hover:after:right-2 hover:after:bottom-0 hover:after:mx-auto hover:after:w-[100%] hover:after:h-1 hover:after:bg-yellow-500 hover:after:absolute`}
                                    >
                                        {curr.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
