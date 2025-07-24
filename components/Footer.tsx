
import React from 'react';
import { Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#18181B] border-t border-gray-800">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <a href="#" className="text-gray-400 hover:text-[#FFE600] transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <Linkedin className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#FFE600] transition-colors">
                            <span className="sr-only">Twitter</span>
                            <Twitter className="h-6 w-6" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-[#FFE600] transition-colors">
                            <span className="sr-only">Facebook</span>
                            <Facebook className="h-6 w-6" />
                        </a>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            &copy; {new Date().getFullYear()} e-ngenieria. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
                 <div className="mt-8 text-center text-sm text-gray-500">
                    <p>Desarrollado por Testify.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;