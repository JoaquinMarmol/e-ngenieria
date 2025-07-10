import React from 'react';
import { Handshake, Building, Tv, Mic, GraduationCap, BarChart, ShoppingCart, Briefcase } from 'lucide-react';

const partners = [
    { name: "SOFTWARE DE GESTION", description: "Simplificá la administración y automatizá tareas con un software integral para hacer crecer tu negocio.", icon: <BarChart /> },
    { name: "SEMILLERO DIGITAL", description: "Comunidad de profesionales que usan la Transformación Digital para generar una Transformación Social.", icon: <GraduationCap /> },
    { name: "VIRTUAL SELLER", description: "Consultores certificados por Virtual Seller Analytics para potenciar tus estrategias de venta.", icon: <ShoppingCart /> },
    { name: "ESTIBA Y DISTRIBUCIÓN", description: "Equipo especializado en logística de última milla con depósito en BA para envíos Flex y Turbo.", icon: <Building /> },
    { name: "CÁMARA ARGENTINA DE COMERCIO ELECTRÓNICO", description: "CACE reúne empresas y emprendedores para desarrollar la Economía Digital en Argentina.", icon: <Handshake /> },
    { name: "SISTEMA DE GESTIÓN E INTEGRACIÓN.", description: "Aplicación platinum certificada por MercadoLibre para gestionar múltiples tiendas desde un solo lugar.", icon: <BarChart /> },
    { name: "LA PONCE PRODUCCIONES", description: "Agencia de las BUENAS Noticias. Formación y educación en comunicación con propósito.", icon: <Mic /> },
    { name: "EMPRENDER TV", description: "Canal de TV que comunica el esfuerzo de quienes persiguen su sueño de emprender.", icon: <Tv /> },
    { name: "CICAP", description: "Capacitación, coaching y finanzas para que tu negocio crezca y evolucione.", icon: <Briefcase /> }
];

const PartnerCard: React.FC<{ name: string, description: string, icon: React.ReactElement<{ className?: string }> }> = ({ name, description, icon }) => (
     <div className="bg-gray-800 p-6 rounded-lg text-center transform hover:-translate-y-1 transition-transform duration-300 border border-gray-700 hover:border-cyan-500/50 shadow-lg h-full">
        <div className="flex items-center justify-center w-16 h-16 bg-gray-700 text-cyan-400 rounded-full mx-auto mb-4">
            {React.cloneElement(icon, { className: "w-8 h-8" })}
        </div>
        <h3 className="text-lg font-bold text-white mb-2 uppercase">{name}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);


const Alianzas: React.FC = () => {
    return (
        <section id="alianzas" className="py-20 md:py-32 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-extrabold font-orbitron text-white">Nuestras <span className="text-cyan-400">Alianzas</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Colaboramos con los mejores para ofrecerte un servicio integral y potenciar tu crecimiento.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                   {partners.map(partner => (
                       <PartnerCard key={partner.name} {...partner} />
                   ))}
                </div>
            </div>
        </section>
    );
};

export default Alianzas;