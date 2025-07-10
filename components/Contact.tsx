
import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

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
            setStatus('Mensaje enviado. ¡Gracias por contactarnos!');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setStatus(''), 3000);
        }, 1500);
    };

    return (
        <section id="contacto" className="py-20 md:py-32 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold font-orbitron text-white">Hablemos</h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">¿Listo para impulsar tus ventas? Contáctanos y empecemos a trabajar juntos.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                <Phone className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Teléfono / WhatsApp</h3>
                                <a href="https://wa.me/5493513771199" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors">+54 9 351 377-1199</a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                <Mail className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">Email</h3>
                                <a href="mailto:info@e-ngenieria.com" className="text-gray-400 hover:text-cyan-400 transition-colors">info@e-ngenieria.com</a>
                            </div>
                        </div>
                         <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                                <MessageSquare className="w-6 h-6 text-cyan-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white">¿Prefieres escribir?</h3>
                                <p className="text-gray-400">Usa el formulario y te responderemos a la brevedad.</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="sr-only">Nombre</label>
                            <input type="text" name="name" id="name" required placeholder="Tu Nombre" value={formData.name} onChange={handleChange} className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all" />
                        </div>
                        <div>
                            <label htmlFor="email" className="sr-only">Email</label>
                            <input type="email" name="email" id="email" required placeholder="Tu Email" value={formData.email} onChange={handleChange} className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all" />
                        </div>
                        <div>
                            <label htmlFor="message" className="sr-only">Mensaje</label>
                            <textarea name="message" id="message" rows={5} required placeholder="¿Cómo podemos ayudarte?" value={formData.message} onChange={handleChange} className="w-full bg-gray-800 border-2 border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full bg-cyan-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105">
                                Enviar Consulta
                            </button>
                        </div>
                        {status && <p className="text-center text-cyan-300 mt-4">{status}</p>}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;