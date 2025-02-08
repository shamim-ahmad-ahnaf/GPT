import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="py-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            <div className="container px-6 mx-auto">

                <div className="flex flex-col gap-12 text-center text-gray-300 lg:flex-row lg:justify-between sm:text-left">
                    {/* Quick Links */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="mb-4 text-2xl font-bold text-lime-400">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About", "Skills", "Projects", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase()}`}
                                        className="text-gray-300 transition-colors hover:text-lime-400"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="mb-4 text-2xl font-bold text-lime-400">Contact</h3>
                        <ul className="space-y-2">
                            <li>
                                Email:{" "}
                                <a
                                    href="mailto:shamimahmad14182266@gmail.com"
                                    className="text-lime-400 hover:underline"
                                >
                                    shamimahmad14182266@gmail.com
                                </a>
                            </li>
                            <li>
                                Phone:{" "}
                                <a
                                    href="tel:01604171812"
                                    className="text-lime-400 hover:underline"
                                >
                                    01604171812, 01748186766
                                </a>
                            </li>
                            <li>
                                Location:{" "}
                                <span className="text-lime-400">Gazipur, Dhaka, Bangladesh</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="flex flex-col items-center sm:items-start">
                        <h3 className="mb-4 text-2xl font-bold text-lime-400">Newsletter</h3>
                        <form className="flex flex-col w-full max-w-xs sm:flex-row sm:max-w-none">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 mb-2 text-black rounded-lg sm:mb-0 focus:outline-none"
                                required
                            />
                            <button className="px-6 py-2 text-white transition rounded-lg bg-lime-500 hover:bg-lime-600">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>


                <div className="flex flex-col items-center pt-10 mt-8 border-t border-gray-700 lg:flex-row lg:justify-between lg:items-center">
                    {/* Copyright */}
                    <p className="mb-4 text-sm text-gray-400 lg:mb-0">
                        © {new Date().getFullYear()} <span className="font-bold text-lime-400">Shamim Ahmad</span>. All rights reserved.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 text-xl text-gray-400">
                        {[
                            { href: "https://facebook.com", icon: <FaFacebookF />, label: "Facebook" },
                            { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
                            { href: "https://instagram.com", icon: <FaInstagram />, label: "Instagram" },
                            { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
                        ].map((social) => (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform transform hover:text-lime-400 hover:scale-110"
                                aria-label={social.label}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    );
}
