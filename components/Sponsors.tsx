import React from 'react';

const sponsors = Array.from({ length: 15 }, (_, i) => `/byn/${i + 1}.webp`);

const SponsorsMarquee: React.FC = () => (
    <div className="flex min-w-full flex-shrink-0 items-center animate-scroll">
        {sponsors.map((logo, index) => (
             <div key={index} className="flex-shrink-0 mx-4">
                <div className="h-24 w-24 bg-gray-800/50 rounded-full flex items-center justify-center border-2 border-gray-700/50 hover:border-[#FFE600]/50 transition-all duration-300 group">
                    <img
                        src={logo}
                        alt={`Patrocinador ${index + 1}`}
                        className="h-full w-full object-contain border p-1 rounded-full grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    />
                </div>
            </div>
        ))}
    </div>
);

const Sponsors: React.FC = () => {
  return (
    <section className="py-16 md:py-20 bg-[#27272A]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-gray-400 mb-12 tracking-wider uppercase">
          Confían en Nosotros
        </h2>
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)]">
            <div className="flex">
                <SponsorsMarquee />
                <SponsorsMarquee />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;