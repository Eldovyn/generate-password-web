import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { LogIn } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="bg-white shadow-sm px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-xl font-bold text-gray-800">MyApp</div>

                    <button
                        className="md:hidden text-gray-800"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <ul className="hidden md:flex space-x-6 text-gray-600 font-medium">
                        <li><Button variant="ghost" className="hover:text-blue-500">Home</Button></li>
                        <li><Button variant="ghost" className="hover:text-blue-500">About</Button></li>
                        <li>
                            <Button variant="outline" className="text-gray-800">
                                <div className="flex flex-row">
                                    <LogIn size={16} className="mr-2" />
                                    <p className="text-[12px]">Login</p>
                                </div>
                            </Button>
                        </li>
                    </ul>

                </div>

                {isOpen && (
                    <ul className="md:hidden mt-4 space-y-2 text-gray-600 font-medium">
                        <li className="hover:text-blue-500 cursor-pointer">Home</li>
                        <li className="hover:text-blue-500 cursor-pointer">About</li>
                        <li className="hover:text-blue-500 cursor-pointer">Contact</li>
                    </ul>
                )}
            </nav>
        </>
    )
}

export default Navbar;