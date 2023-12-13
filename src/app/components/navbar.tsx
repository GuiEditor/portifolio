'use client';

import Link from 'next/link';
import React, { useState } from 'react';

export default function NavBarComponent() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClicked, setIsClicked] = useState(0);

    const changeClick = (numBtn: number) => {
        const element = document.getElementById(`section${numBtn}`)
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
        setIsClicked(numBtn);
    }

    return (
        <nav className='bg-purpledeep-2 lg:top-0 lg:z-50 w-screen lg:fixed xl:top-0 xl:z-50 xl:fixed 2xl:top-0 2xl:z-50 2xl:fixed'>
            <div className="w-screen flex items-center justify-center mx-auto p-3">
                <button className={`${isClicked == 1 ? 'bg-purpledeep text-xl font-serif text-white duration-300 rounded shadow p-2 mr-3 ml-3' : 'p-2 text-xl font-serif text-white mr-3 ml-3 transition transform ease-in hover:translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'}`} onClick={() => changeClick(1)}>Início</button>
                <button className={`${isClicked == 2 ? 'bg-purpledeep text-xl font-serif text-white duration-300 rounded shadow p-2 mr-3 ml-3' : 'p-2 text-xl font-serif text-white mr-3 ml-3 transition transform ease-in hover:translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'}`} onClick={() => changeClick(2)}>Trabalhos</button>
                <button className={`${isClicked == 3 ? 'bg-purpledeep text-xl font-serif text-white duration-300 rounded shadow p-2 mr-6' : 'p-2 text-xl font-serif text-white mr-6 transition transform ease-in hover:translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'}`} onClick={() => changeClick(3)}>Contato</button>
            </div>
        </nav>
    );
}