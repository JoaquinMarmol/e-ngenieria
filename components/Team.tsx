
import React from 'react';
import { Linkedin } from 'lucide-react';

const teamData = [
    {
        name: 'Brenda Rodriguez',
        description: 'Técnica electromecánica y en comercio exterior. Consultora certificada por MercadoLibre para Argentina y Latinoamérica, con experiencia en e-commerce y asesoramiento en procesos comerciales en distintos rubros. Investigación de mercado y comercialización.',
        image: 'brenda.png',
        linkedin: '#'
    },
    {
        name: 'Eugenio Gonzalez Alba',
        description: 'Ingeniero Mecánico, posgraduado en Psicología, Perito Judicial, y consultor certificado por MercadoLibre. Docente con experiencia en comercio online y gestión gerencial de Posventa en industrias Nacionales y Multinacionales.',
        image: 'eugenio.png',
        linkedin: '#'
    }
];


const TeamMember: React.FC<{ name: string; description: string; image: string; linkedin: string; }> = ({ name, description, image, linkedin }) => (
    <div className="text-center group bg-[#333333] p-8 rounded-lg flex flex-col items-center">
        <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-[#FFE600] transition-all duration-300 transform group-hover:scale-105 mb-4">
            <img src={image} alt={name} className="w-full h-full object-cover"/>
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#FFE600]">
                    <Linkedin size={32} />
                </a>
            </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{name}</h3>
        <p className="text-gray-300 mt-2 text-sm flex-grow">{description}</p>
    </div>
);

const Team: React.FC = () => {
    return (
        <section id="equipo" className="py-20 md:py-32 bg-[#27272A]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Nuestro <span className="text-[#FFE600]">Equipo</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Un equipo multidisciplinario de profesionales altamente calificados, comprometidos con la excelencia.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {teamData.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;