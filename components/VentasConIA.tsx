
import React from 'react';
import { CheckCircle, PlayCircle } from 'lucide-react';

const VentasConIA: React.FC = () => {
    return (
        <section id="ventas-ia" className="py-20 md:py-32 bg-gray-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="animate-fade-in-up">
                        <h3 className="text-lg font-bold text-cyan-400 uppercase tracking-wider">Smart Seller Pro</h3>
                        <h2 className="text-3xl md:text-4xl font-extrabold font-orbitron text-white mt-2 mb-6">
                            El Futuro de las Ventas con <span className="text-cyan-400">Inteligencia Artificial</span>
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Llega directo a esos clientes de nicho que realmente te interesan, con una alta intención de compra, ¡sin desperdiciar un peso! Con nuestras herramientas de IA, la prospección y el contacto se transforman.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Prospección Láser</h4>
                                    <p className="text-gray-400">Identifica a tus clientes ideales con precisión quirúrgica.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Contacto Estratégico</h4>
                                    <p className="text-gray-400">Mensajes personalizados que realmente conectan y convierten.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="font-semibold text-white">Ahorro Garantizado</h4>
                                    <p className="text-gray-400">Reduce drásticamente tu inversión en publicidad tradicional.</p>
                                </div>
                            </li>
                        </ul>
                         <p className="mt-6 text-lg text-white font-semibold">
                            ¡Es momento de vender de forma inteligente, no más duro!
                        </p>
                    </div>
                    <div className="relative aspect-video bg-gray-800 rounded-lg shadow-2xl flex items-center justify-center group overflow-hidden border-2 border-gray-700">
                         <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-20 transition-opacity"></div>
                        <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" alt="Dashboard AI" className="absolute w-full h-full object-cover"/>
                        <PlayCircle className="w-20 h-20 text-white/70 group-hover:text-white group-hover:scale-110 transition-all duration-300 z-10" />
                        <div className="absolute bottom-4 left-4 z-10">
                            <p className="font-bold text-white text-lg">Todo lo que buscás en prospección</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VentasConIA;
