import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface ConsultingPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const HandshakeIcon: React.FC = () => (
    <svg width="88" height="58" viewBox="0 0 88 58" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Handshake icon">
      <path d="M84.4643 29C84.4643 43.3421 68.611 55 47.7321 55C26.8532 55 11 43.3421 11 29C11 14.6579 26.8532 3 47.7321 3C68.611 3 84.4643 14.6579 84.4643 29Z" fill="#18181B" stroke="#FFE600" strokeWidth="2"/>
      <path d="M49.4346 22.464C49.4346 20.352 48.6586 18.576 47.1066 17.136C45.5546 15.696 43.5146 14.976 41.0466 14.976C39.0066 14.976 37.2306 15.6 35.7906 16.848C34.3506 18.096 33.3986 19.8 32.9946 21.912L28.6386 21.312C29.1186 18.096 30.5586 15.504 32.9946 13.536C35.4306 11.568 38.3586 10.584 41.8386 10.584C45.3986 10.584 48.2466 11.496 50.3826 13.32C52.5186 15.144 53.5866 17.664 53.5866 20.88C53.5866 22.848 53.0826 24.624 52.0746 26.208C51.0666 27.792 49.6266 29.04 47.8266 29.952C50.1306 30.72 52.0746 31.968 53.5866 33.696C55.1786 35.424 55.9746 37.584 55.9746 40.176C55.9746 43.536 54.8226 46.128 52.5186 47.952C50.2146 49.776 47.2386 50.688 43.5146 50.688C39.5466 50.688 36.1746 49.704 33.4626 47.736C30.7506 45.768 29.0946 42.96 28.5666 39.312L32.9946 39.84C33.3986 42.048 34.3506 43.776 35.7906 45.024C37.2306 46.272 39.0066 46.968 41.0466 46.968C43.5146 46.968 45.5546 46.248 47.1066 44.808C48.6586 43.368 49.4346 41.592 49.4346 39.408C49.4346 37.224 48.6586 35.448 47.1066 34.008C45.5546 32.568 43.5146 31.848 41.0466 31.848H37.5666V28.296H41.0466C43.5146 28.296 45.5546 27.576 47.1066 26.136C48.6586 24.696 49.4346 22.92 49.4346 20.808V22.464Z" fill="#FFE600"/>
    </svg>
);


const ConsultingPopup: React.FC<ConsultingPopupProps> = ({ isOpen, onClose }) => {
    const popupRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
            popupRef.current?.focus();
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const handleContactClick = () => {
        onClose();
        document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm"
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-title"
        >
            <div
                ref={popupRef}
                tabIndex={-1}
                className="relative bg-[#18181B] border-2 border-[#FFE600] rounded-lg shadow-2xl w-11/12 max-w-md mx-auto overflow-hidden text-gray-200 animate-fade-in-up p-8 text-center"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                    aria-label="Cerrar popup"
                >
                    <X className="h-6 w-6" />
                </button>
                
                <div className="flex justify-center mb-4">
                   <img src="mercadolibre.svg" alt="" />
                </div>
                
                <h2 id="popup-title" className="text-2xl font-bold text-[#FFE600] mb-2"> ¡PEDI TU CONSULTORIA EXPRESS GRATUITA! </h2>
                <p className="text-gray-300 mb-6">
                    <span className="font-bold text-white"> No pierdas tiempo y mejorá tus ventas hoy</span>
                </p>
                <button 
                    onClick={handleContactClick}
                    className="w-full bg-[#FFE600] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                    Solicita información
                </button>
            </div>
        </div>
    );
};

export default ConsultingPopup;
