
import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('Enviando...');
        // Simulación de envío
        setTimeout(() => {
            setStatus('Mensaje enviado con éxito. ¡Gracias!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contacto" className="py-20 md:py-32 bg-[#18181B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Contáctenos</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">¿Tiene un proyecto en mente? Hablemos. Estamos aquí para ayudarle a hacerlo realidad.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-[#FFE600]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Dirección</h3>
                                <p className="text-gray-400">Gral. Urquiza 774, C1221 Cdad. Autónoma de Buenos Aires</p>
                                <p className="text-gray-400">Cordoba Martel de los Rios 4250 Villa Marta Cordoba</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center">
                                <Phone className="w-6 h-6 text-[#FFE600]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Teléfono</h3>
                                <p className="text-gray-400">+54 (3513) 771199</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-[#333333] rounded-full flex items-center justify-center">
                                <Mail className="w-6 h-6 text-[#FFE600]" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Email</h3>
                                <p className="text-gray-400">consultas@e-ngenieria.com</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Nombre</label>
                            <input type="text" name="name" id="name" required placeholder="Su Nombre" value={formData.name} onChange={handleChange} className="w-full bg-[#333333] border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-[#FFE600] transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" required placeholder="Su Email" value={formData.email} onChange={handleChange} className="w-full bg-[#333333] border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-[#FFE600] transition-all" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensaje</label>
                            <textarea name="message" id="message" rows={5} required placeholder="Su Mensaje" value={formData.message} onChange={handleChange} className="w-full bg-[#333333] border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#FFE600] focus:border-[#FFE600] transition-all"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-[#FFE600] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
                                Enviar Mensaje
                            </button>
                        </div>
                        {status && <p className="text-center text-[#FFE600] mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;