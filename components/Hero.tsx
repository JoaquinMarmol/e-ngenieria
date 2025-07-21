
import React from 'react';

const Hero: React.FC = () => {
    return (
        <section id="inicio" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>
            <video autoPlay loop muted playsInline className="absolute z-0 w-auto min-w-full min-h-full max-w-none">
                <source src="https://assets.mixkit.co/videos/preview/mixkit-futuristic-wireframe-tunnel-1293-large.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative z-20 px-4 sm:px-6 lg:px-8 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight">
                    Construyendo el <span className="text-[#FFE600]">Futuro</span> con Precisión e Innovación
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                    Somos una empresa de ingeniería líder, dedicada a brindar soluciones integrales en estudios, proyectos, supervisión y gerenciamiento de obras civiles y viales.
                </p>
                <div className="mt-10">
                    <a href="#contacto" className="inline-block bg-[#FFE600] text-black font-bold py-3 px-8 rounded-full text-lg hover:bg-yellow-400 transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-yellow-500/30">
                        Contáctenos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;