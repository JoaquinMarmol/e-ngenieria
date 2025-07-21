
import React from 'react';
import { ClipboardList, HardHat, Search, SlidersHorizontal, Map, Users, Bot, Zap, Target } from 'lucide-react';

const servicesData = [
    {
        icon: <ClipboardList className="w-10 h-10 text-[#FFE600]" />,
        title: "Estudios",
        description: "Realizamos estudios de pre-factibilidad, factibilidad técnico-económica, de impacto ambiental y evaluaciones de proyectos."
    },
    {
        icon: <HardHat className="w-10 h-10 text-[#FFE600]" />,
        title: "Proyectos",
        description: "Diseño de proyectos ejecutivos, ingeniería de detalle, cómputos y presupuestos, y elaboración de pliegos de licitación."
    },
    {
        icon: <Search className="w-10 h-10 text-[#FFE600]" />,
        title: "Supervisión",
        description: "Supervisión técnica de obras, control de calidad de materiales y procesos, y seguimiento de planes de trabajo."
    },
    {
        icon: <SlidersHorizontal className="w-10 h-10 text-[#FFE600]" />,
        title: "Gerenciamiento",
        description: "Gerenciamiento integral de proyectos, desde la planificación hasta la puesta en marcha y cierre del proyecto."
    },
    {
        icon: <Map className="w-10 h-10 text-[#FFE600]" />,
        title: "Ingeniería Vial",
        description: "Especialización en proyectos de infraestructura vial, incluyendo diseño de carreteras, puentes y túneles."
    },
    {
        icon: <Users className="w-10 h-10 text-[#FFE600]" />,
        title: "Consultoría",
        description: "Asesoramiento técnico especializado para la toma de decisiones estratégicas en proyectos de ingeniería."
    },
];

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; }> = ({ icon, title, description }) => (
    <div className="group relative bg-[#333333] p-6 rounded-lg overflow-hidden border border-gray-700 hover:border-[#FFE600] transition-all duration-300">
        <div className="absolute top-0 left-0 w-0 h-full bg-[#FFE600]/10 group-hover:w-full transition-all duration-500"></div>
        <div className="relative z-10">
            <div className="mb-4">
                {icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

const Services: React.FC = () => {
    return (
        <section id="servicios" className="py-20 md:py-32 bg-[#27272A]/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Nuestros <span className="text-[#FFE600]">Servicios</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Ofrecemos un abanico completo de servicios de ingeniería para cubrir todas las fases de su proyecto.</p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>

                <div className="mt-24 pt-16 border-t border-gray-700">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                                <span className="text-[#FFE600]">Smart Seller Pro</span> 🤖✨
                            </h3>
                            <p className="mt-4 text-lg text-gray-300">
                                ¡Es hora de sumarte al futuro de las ventas con la Inteligencia Artificial de e-ngenieria!
                                Imagina esto: Llegar directo a esos clientes de nicho que realmente te interesan, con una alta intención de compra, ¡sin desperdiciar un peso! 🎯💰
                            </p>
                             <div className="mt-8 space-y-4">
                                <div className="flex items-start">
                                    <Zap className="h-6 w-6 text-[#FFE600] mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Prospección láser</h4>
                                        <p className="text-gray-400">Identifica a tus clientes ideales con precisión quirúrgica.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Target className="h-6 w-6 text-[#FFE600] mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Contacto estratégico</h4>
                                        <p className="text-gray-400">Mensajes personalizados que realmente conectan.</p>
                                    </div>
                                </div>
                                <div className="flex items-start">
                                    <Bot className="h-6 w-6 text-[#FFE600] mr-4 mt-1 flex-shrink-0" />
                                    <div>
                                        <h4 className="font-bold text-white">Ahorro garantizado</h4>
                                        <p className="text-gray-400">Reduce drásticamente tu inversión en publicidad tradicional.</p>
                                    </div>
                                </div>
                            </div>
                            <p className="mt-6 text-gray-300 font-semibold">¡Es momento de vender de forma inteligente, no más duro! 💪</p>
                        </div>
                        <div className="bg-[#333333] rounded-lg aspect-video flex items-center justify-center p-8 border border-gray-700">
                            <div className="text-center">
                                <p className="text-gray-400">Video Próximamente</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Services;