import React, { useState, useEffect, useRef } from 'react';
import { ClipboardList, HardHat, Search, SlidersHorizontal, Map, Users, Bot, Zap, Target } from 'lucide-react';

const servicesData = [
    {
        icon: <ClipboardList className="w-10 h-10 text-black" />,
        title: "Estudios",
        description: "Realizamos estudios de pre-factibilidad, factibilidad técnico-económica, de impacto ambiental y evaluaciones de proyectos."
    },
    {
        icon: <HardHat className="w-10 h-10 text-black" />,
        title: "Proyectos",
        description: "Diseño de proyectos ejecutivos, ingeniería de detalle, cómputos y presupuestos, y elaboración de pliegos de licitación."
    },
    {
        icon: <Search className="w-10 h-10 text-black" />,
        title: "Supervisión",
        description: "Supervisión técnica de obras, control de calidad de materiales y procesos, y seguimiento de planes de trabajo."
    },
    {
        icon: <SlidersHorizontal className="w-10 h-10 text-black" />,
        title: "Gerenciamiento",
        description: "Gerenciamiento integral de proyectos, desde la planificación hasta la puesta en marcha y cierre del proyecto."
    },
    {
        icon: <Map className="w-10 h-10 text-black" />,
        title: "Ingeniería Vial",
        description: "Especialización en proyectos de infraestructura vial, incluyendo diseño de carreteras, puentes y túneles."
    },
    {
        icon: <Users className="w-10 h-10 text-black" />,
        title: "Consultoría",
        description: "Asesoramiento técnico especializado para la toma de decisiones estratégicas en proyectos de ingeniería."
    },
];

const AnimatedServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string; delay: number }> = ({ icon, title, description, delay }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const delayStyle = { transitionDelay: `${delay}ms` };

    return (
        <div
            ref={ref}
            style={delayStyle}
            className={`group bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
        >
            <div className="relative z-10">
                <div className="mb-4">
                    {icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    return (
        <section id="servicios" className="py-20 md:py-32 bg-[#FFE600]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-black">
                        <span 
                            className="text-transparent"
                            style={{ WebkitTextStroke: '1px black' }}
                        >
                            Nuestros
                        </span> Servicios
                    </h2>
                    <p className="mt-4 text-lg text-gray-800 max-w-3xl mx-auto">
                        Ofrecemos un abanico completo de servicios de ingeniería para cubrir todas las fases de su proyecto.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <AnimatedServiceCard key={index} {...service} delay={index * 100} />
                    ))}
                </div>

                <div className="mt-24">
                   <div className="bg-[#333333] rounded-2xl p-8 md:p-16 shadow-2xl border border-gray-700">
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
                                <p className="mt-6 text-gray-200 font-semibold">¡Es momento de vender de forma inteligente, no más duro! 💪</p>
                            </div>
                            <div className="bg-[#18181B] rounded-lg aspect-video flex items-center justify-center border border-gray-700">
                                <div className="text-center">
                                    <img src="ia.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                   </div>
                </div>

            </div>
        </section>
    );
};

export default Services;
