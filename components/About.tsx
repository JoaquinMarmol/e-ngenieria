
import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Gem } from 'lucide-react';

const AnimatedCard: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode; delay?: number }> = ({ icon, title, children, delay = 0 }) => {
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
            {
                threshold: 0.1,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, []);
    
    const delayStyle = { transitionDelay: `${delay}ms` };

    return (
        <div
            ref={ref}
            className={`bg-[#333333] p-8 rounded-xl shadow-lg hover:shadow-[#FFE600]/20 transform hover:-translate-y-2 transition-all duration-700 ease-out ${
                isVisible
                    ? 'opacity-100 translate-x-0 translate-y-0'
                    : 'opacity-0 -translate-x-10 md:translate-y-5 md:translate-x-0'
            }`}
            style={delayStyle}
        >
            <div className="flex items-center justify-center w-16 h-16 bg-[#FFE600]/20 text-[#FFE600] rounded-full mb-6">
                {icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
            <p className="text-gray-400">{children}</p>
        </div>
    );
};


const About: React.FC = () => {
    const [titleVisible, setTitleVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);
    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTitleVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section id="nosotros" ref={sectionRef} className="py-20 md:py-32 bg-[#18181B] overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`text-center mb-16 transition-all duration-700 ease-out ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                     <h2 className="text-3xl md:text-4xl font-extrabold text-white">Sobre <span className="text-[#FFE600]">Nosotros</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Nuestro compromiso es ofrecer servicios de consultoría en ingeniería con los más altos estándares de calidad, seguridad y eficiencia.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    <AnimatedCard icon={<Target size={32} />} title="Misión">
                        Proveer soluciones de ingeniería innovadoras y de alta calidad que superen las expectativas de nuestros clientes, contribuyendo al desarrollo sostenible de la sociedad y garantizando la seguridad y eficiencia en cada proyecto.
                    </AnimatedCard>
                    <AnimatedCard icon={<Eye size={32} />} title="Visión" delay={200}>
                        Ser la empresa de consultoría en ingeniería de referencia a nivel nacional e internacional, reconocida por nuestra excelencia técnica, nuestro compromiso con la innovación y nuestra capacidad para afrontar los desafíos más complejos.
                    </AnimatedCard>
                    <AnimatedCard icon={<Gem size={32} />} title="Valores" delay={400}>
                        Compromiso, Calidad, Integridad, Innovación y Seguridad. Estos pilares guían cada una de nuestras acciones y decisiones, asegurando relaciones duraderas y de confianza con nuestros clientes y colaboradores.
                    </AnimatedCard>
                </div>
            </div>
        </section>
    );
};

export default About;
