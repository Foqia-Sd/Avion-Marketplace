import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <div>
            
            {/* Navigation Links (Only Home & About visible on small screens) */}
            <div className="flex justify-center mt-4">
                <ul className="flex gap-4 text-[15px] text-[#726E8D]">
                    <li><Link href={"/"}>Home</Link></li>
                    <li><Link href={"/about"}>About</Link></li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>

            {/* Full Navigation - Hidden on Small Screens */}
            <div className="hidden lg:flex justify-center mt-4 mb-6">
                <ul className="flex gap-8 text-[15px] text-[#726E8D]">
                    <li className="cursor-pointer">Plant Pots</li>
                    <li className="cursor-pointer">Ceramics</li>
                    <li className="cursor-pointer">Tables</li>
                    <li className="cursor-pointer">Chairs</li>
                    <li className="cursor-pointer">Crockery</li>
                    <li className="cursor-pointer">Tableware</li>
                    <li className="cursor-pointer">Cutlery</li>
                </ul>
            </div>
        </div>
    )
}

export default Header