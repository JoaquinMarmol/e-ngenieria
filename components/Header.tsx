
import React, { useState } from 'react';

interface HeaderProps {
    activeSection: string;
    isScrolled: boolean;
}

const NavLink: React.FC<{ href: string; children: React.ReactNode; isActive: boolean }> = ({ href, children, isActive }) => (
    <a href={href} className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive ? 'text-cyan-400' : 'text-gray-300 hover:text-white hover:bg-gray-700'}`}>
        {children}
    </a>
);

const Header: React.FC<HeaderProps> = ({ activeSection, isScrolled }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navItems = [
        { id: 'inicio', label: 'Inicio' },
        { id: 'ventas-ia', label: 'Ventas con IA' },
        { id: 'quienes-somos', label: 'Quiénes Somos' },
        { id: 'servicios', label: 'Servicios' },
        { id: 'alianzas', label: 'Alianzas' },
        { id: 'contacto', label: 'Contacto' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#inicio" className="text-2xl font-orbitron font-bold text-white tracking-wider">
                            e-<span className="text-cyan-400">ngenieria</span>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navItems.map(item => (
                                <NavLink key={item.id} href={`#${item.id}`} isActive={activeSection === item.id}>
                                    {item.label}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800">
                        {navItems.map(item => (
                             <a key={item.id} href={`#${item.id}`} onClick={() => setIsOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${activeSection === item.id ? 'bg-gray-900 text-cyan-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}>
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
