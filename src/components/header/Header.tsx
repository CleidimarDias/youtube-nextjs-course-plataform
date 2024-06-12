"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdMenu, MdOutlineOpenInNew } from 'react-icons/md';


export default function Header() {
    const [title, setTitle] = useState("CodarSe");
    const [drawer, setDrawer] = useState(false);
    const currentPath = usePathname();

    useEffect(() => {
        setTitle(document.title);
        setDrawer(false);
    }, [currentPath]);

    return (
        <nav className="flex items-center justify-start pl-6 md:justify-center bg-primary py-2 sm:py-4 gap-6">
            <button className="sm:hidden" onClick={() => setDrawer(true)}>
                <MdMenu size={24} />
            </button>
            <ul className="flex gap-4 items-center" tabIndex={drawer ? -1 : undefined}>
                <li className="my-2">
                    <Link href="/" className="border-2 rounded-md py-2 px-1 font-bold">CODARSE</Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="/" data-active={currentPath === '/'} className="data-[active=true]:underline">
                        Página Inicial
                    </Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="/cursos" data-active={currentPath === '/cursos'} className="data-[active=true]:underline">
                        Cursos
                    </Link>
                </li>

                <li className="hidden sm:block">
                    <Link href="https://blog.codarse.com" target='_blank' className="flex gap-1 items-center">
                        Blog
                        <MdOutlineOpenInNew />
                    </Link>

                </li>


            </ul>

            <div
                data-open={drawer}
                tabIndex={drawer ? undefined : -1}
                onClick={() => setDrawer(false)}
                className="bg-gradient-to-r from-bacground fixed left-0 top-0 bottom-0 right-0 transition-transform data-[open=false]:-translate-x-full"
            >
                <ul
                    onClick={event => event.stopPropagation()}
                    className="flex flex-col p-4 gap-4 w-60 h-full  bg-bacground "
                >

                    <li className="">
                        <Link href="/" data-active={currentPath === '/'} className="data-[active=true]:underline">
                            Página Inicial
                        </Link>
                    </li>
                    <li className="">
                        <Link href="/cursos" data-active={currentPath === '/cursos'} className="data-[active=true]:underline">
                            Cursos
                        </Link>
                    </li>

                    <li className="">
                        <Link href="https://blog.codarse.com" target='_blank' className="flex gap-1 items-center">
                            Blog
                            <MdOutlineOpenInNew />
                        </Link>

                    </li>


                </ul>
            </div>

            <h1 className='sm:hidden'>{title}</h1>
        </nav>
    );
};
