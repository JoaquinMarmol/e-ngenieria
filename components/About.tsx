
import React from 'react';
import { Target, Eye, Gem } from 'lucide-react';

const Card: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({ icon, title, children }) => (
    <div className="bg-[#333333] flex items-center flex-col justify-center p-8 rounded-xl shadow-lg hover:shadow-[#FFE600]/20 transform hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm border border-gray-700">
        <div className="flex items-center justify-center w-16 h-16 bg-[#FFE600]/20 text-[#FFE600] rounded-full mb-6">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 text-center">{children}</p>
    </div>
);


const About: React.FC = () => {
    return (
        <section id="nosotros" className="py-20 md:py-32 bg-[#18181B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-extrabold text-white">Sobre <span className="text-[#FFE600]">Nosotros</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Nuestro compromiso es ofrecer servicios de consultoría en ingeniería con los más altos estándares de calidad, seguridad y eficiencia.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                   <Card icon={<Target size={32} />} title="Misión">
                        Proveer soluciones de ingeniería innovadoras y de alta calidad que superen las expectativas de nuestros clientes, contribuyendo al desarrollo sostenible de la sociedad y garantizando la seguridad y eficiencia en cada proyecto.
                    </Card>
                     <Card icon={<Eye size={32} />} title="Visión">
                        Ser la empresa de consultoría en ingeniería de referencia a nivel nacional e internacional, reconocida por nuestra excelencia técnica, nuestro compromiso con la innovación y nuestra capacidad para afrontar los desafíos más complejos.
                    </Card>
                     <Card icon={<Gem size={32} />} title="Valores">
                        Compromiso, Calidad, Integridad, Innovación y Seguridad. Estos pilares guían cada una de nuestras acciones y decisiones, asegurando relaciones duraderas y de confianza con nuestros clientes y colaboradores.
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default About;