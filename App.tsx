
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ConsultingPopup from './components/ConsultingPopup';

const App: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>('inicio');
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isPopupOpen, setIsPopupOpen] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            const scrollPos = window.scrollY + window.innerHeight / 2;

            sections.forEach(section => {
                if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                    setActiveSection(section.id);
                }
            });

            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        if (isPopupOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isPopupOpen]);


    return (
        <div className="bg-[#18181B] min-h-screen text-gray-200">
            <Header activeSection={activeSection} isScrolled={isScrolled} />
            <main>
                <Hero />
                <About />
                <Services />
                <Projects />
                <Team />
                <Contact />
            </main>
            <Footer />
            <ConsultingPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
        </div>
    );
};

export default App;
