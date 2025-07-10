
import React from 'react';
import { UserCircle } from 'lucide-react';

const teamMembers = [
    {
        name: 'Brenda Rodriguez',
        role: 'Consultora Certificada MercadoLibre',
        bio: 'Técnica electromecánica y en comercio exterior. Consultora certificada por MercadoLibre para Argentina y Latinoamérica, con experiencia en e-commerce, asesoramiento en procesos comerciales, investigación de mercado y comercialización.',
    },
    {
        name: 'Eugenio Gonzalez Alba',
        role: 'Consultor Certificado MercadoLibre',
        bio: 'Ingeniero Mecánico, posgraduado en Psicología. Perito Judicial, Docente y también consultor certificado por MercadoLibre. Experto en ventas, posventa y gestión gerencial en industrias nacionales y multinacionales.',
    }
];

const TeamCard: React.FC<{ name: string, role: string, bio: string }> = ({ name, role, bio }) => (
    <div className="bg-gray-800/50 p-8 rounded-xl shadow-lg hover:shadow-cyan-400/20 transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-gray-700 text-center h-full flex flex-col">
        <div className="relative w-24 h-24 mx-auto mb-4">
             <div className="w-full h-full rounded-full bg-gray-700 flex items-center justify-center">
                <UserCircle className="w-16 h-16 text-cyan-400" />
            </div>
        </div>
        <h3 className="text-xl font-bold font-orbitron text-white">{name}</h3>
        <p className="text-cyan-400 font-semibold text-sm mb-4">{role}</p>
        <p className="text-gray-400 text-sm flex-grow">{bio}</p>
    </div>
);


const About: React.FC = () => {
    return (
        <section id="quienes-somos" className="py-20 md:py-32 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-extrabold font-orbitron text-white">Quiénes <span className="text-cyan-400">Somos</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Un equipo de ingenieros y especialistas dedicados a transformar tu presencia digital y potenciar tus ventas.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
                   {teamMembers.map(member => (
                       <TeamCard key={member.name} {...member} />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default About;
