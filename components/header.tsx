'use client';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiForkAndKnife, CiLogin } from 'react-icons/ci';
import { Button } from './ui/button';
import { FaCartShopping } from 'react-icons/fa6';

const routes = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Menu',
    path: '/#',
  },
  {
    name: 'About',
    path: '/#',
  },
  {
    name: 'Contact',
    path: '#',
  },
];
export default function Header() {
  const activePathName = usePathname();

  return (
    <header className="flex justify-between backdrop-blur-2xl bg-transparent items-center border-b border-black h-14 md:px-9 px-3 fixed top-0 w-full z-50">
      <h1 className='flex items-center font-bold'>
        SilverSpon{' '}
        <span>
          <CiForkAndKnife className="text-orange-500 font-bold text-xl" />
        </span>
      </h1>
      <nav className="h-full">
        <ul className="flex gap-x-6 h-full  text-sm">
          {routes.map((route) => (
            <li
              key={route.path}
              className={cn(
                ' transition flex items-center relative text-xl',
                activePathName === route.path ? 'text-neutral-900' : 'text-neutral-800',
              )}
            >
              <Link href={route.path}>{route.name}</Link>

              {activePathName === route.path && (
                <motion.div
                  layoutId="header-active-link"
                  className="bg-[#FF8702] h-1 w-full absolute bottom-0"
                ></motion.div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <div className='flex space-x-4 items-center'>
        <FaCartShopping className='relative z-0' />
        <div className=' absolute top-2 z-10 right-30 rounded-full bg-orange-400 flex items-center justify-center  h-4 w-4'>2</div>

        <Button className="bg-orange-500 text-black">
          <span>
            <CiLogin />
          </span>
          Login
        </Button>
      </div>
    </header>
  );
}
