
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VentasConIA from './components/VentasConIA';
import About from './components/About';
import Services from './components/Services';
import Alianzas from './components/Alianzas';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('inicio');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll<HTMLElement>('section[id]');
            const scrollPos = window.scrollY + window.innerHeight / 2;

            let current = 'inicio';
            sections.forEach(section => {
                if (section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                    current = section.id;
                }
            });

            setActiveSection(current);
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="bg-gray-900 min-h-screen text-gray-200">
            <Header activeSection={activeSection} isScrolled={isScrolled} />
            <main>
                <Hero />
                <VentasConIA />
                <Services />
                <About />
                <Alianzas />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default App;
