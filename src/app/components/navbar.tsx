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
        <nav>
            <div className="max-w-4xl flex items-center justify-center mx-auto p-3">
                <button className={`${isClicked == 1 ? 'bg-gray-400 duration-300 rounded shadow p-2 mr-3 ml-3' : 'p-2 mr-3 ml-3 transition transform ease-in hover:translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'}`} onClick={() => changeClick(1)}>Início</button>
                <button className={`${isClicked == 2 ? 'bg-gray-400 duration-300 rounded shadow p-2 mr-3 ml-3' : 'p-2 mr-3 ml-3 transition transform ease-in hover:translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'}`} onClick={() => changeClick(2)}>Trabalhos</button>
                <button className={`${isClicked == 3 ? 'bg-gray-400 duration-300 rounded shadow p-2 mr-6' : 'p-2 mr-6 transition transform ease-in hover:translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none'}`} onClick={() => changeClick(3)}>Contato</button>
            </div>
        </nav>
    );
}