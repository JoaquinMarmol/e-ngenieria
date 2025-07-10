
import React from 'react';
import { ShoppingCart, BarChart2, PhoneForwarded, Rocket } from 'lucide-react';

const servicesData = [
    {
        icon: <ShoppingCart className="w-10 h-10 text-cyan-400" />,
        title: "Estrategia Amazon",
        description: "Diseñamos tu estrategia o formamos a tu equipo. Analizamos el rendimiento, identificamos oportunidades de expansión y optimizamos tu contenido para el éxito."
    },
    {
        icon: <BarChart2 className="w-10 h-10 text-cyan-400" />,
        title: "Business Intelligence (BI)",
        description: "Implementamos soluciones de inteligencia de negocios para que tomes decisiones estratégicas basadas en indicadores clave y datos precisos de tu operación."
    },
    {
        icon: <PhoneForwarded className="w-10 h-10 text-cyan-400" />,
        title: "Contact Center",
        description: "Creamos una experiencia de cliente omnicanal, atendiendo todos tus canales de comunicación de manera unificada y profesional."
    },
    {
        icon: <Rocket className="w-10 h-10 text-cyan-400" />,
        title: "Onboarding a Plataformas",
        description: "Te acompañamos en todo el proceso de onboarding a MercadoLibre o Amazon para que logres tener tu cuenta vendedora 100% operativa y lista para el éxito."
    },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="group relative bg-gray-800 p-6 rounded-lg overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-300 h-full flex flex-col">
        <div className="absolute top-0 left-0 w-0 h-full bg-cyan-500/10 group-hover:w-full transition-all duration-500"></div>
        <div className="relative z-10 flex flex-col flex-grow">
            <div className="mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 flex-grow">{description}</p>
        </div>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="servicios" className="py-20 md:py-32 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-orbitron text-white">Nuestros <span className="text-cyan-400">Servicios</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Soluciones integrales para llevar tu negocio al siguiente nivel en el mundo digital.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;