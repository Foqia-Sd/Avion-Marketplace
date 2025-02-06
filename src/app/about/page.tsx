import AboutHero from '@/components/AboutHero'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { IoIosSearch } from 'react-icons/io'

const Page = () => {
  return (
    <>
    <div className='flex justify-between items-center px-10 py-6'>
      {/* Logo */}
      <Link href={"/"}><h1 className='text-[25px] font-bold'>Avion</h1></Link>

      {/* Navigation Links - Hidden on Mobile */}
      <ul className='hidden md:flex gap-6 font-medium text-[18px]'>
        <Link href={"/about"}><li>About us</li></Link>
        <li className='cursor-pointer'>Contact</li>
        <li className='cursor-pointer'>Blog</li>
      </ul>

      {/* Mobile Menu and Search Icon */}
      <div className="flex items-center gap-4">
        <IoIosSearch size={20} className="text-gray-600" />
        
        {/* Sheet Trigger - Shown Only on Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu size={24} />
            </SheetTrigger>
            <SheetContent>
              <ul className="flex flex-col gap-3 text-[16px] py-6">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About us</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
              </ul>
            </SheetContent>
          </Sheet>
        </div>
      </div>
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
    <AboutHero />
    </>
  )
}

export default Page;
