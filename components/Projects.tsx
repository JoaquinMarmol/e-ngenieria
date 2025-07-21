
import React from 'react';

const projectsData = [
    {
        image: 'https://picsum.photos/seed/project1/800/600',
        title: 'Autopista del Sol',
        category: 'Ingeniería Vial',
        description: 'Supervisión y gerenciamiento de la construcción de 150km de autopista, incluyendo puentes y viaductos.'
    },
    {
        image: 'https://picsum.photos/seed/project2/800/600',
        title: 'Saneamiento Urbano',
        category: 'Obras Civiles',
        description: 'Proyecto ejecutivo para la red de saneamiento de una ciudad de 500,000 habitantes.'
    },
    {
        image: 'https://picsum.photos/seed/project3/800/600',
        title: 'Puente Centenario',
        category: 'Estructuras',
        description: 'Estudio de factibilidad y diseño de detalle para un puente atirantado de 800m de longitud.'
    },
    {
        image: 'https://picsum.photos/seed/project4/800/600',
        title: 'Parque Eólico "Vientos del Sur"',
        category: 'Energías Renovables',
        description: 'Gerenciamiento de la construcción e instalación de un parque eólico de 50MW.'
    }
];

const ProjectCard: React.FC<{ image: string; title: string; category: string; description: string }> = ({ image, title, category, description }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
            <h3 className="text-2xl font-bold text-white">{title}</h3>
            <p className="text-[#FFE600] font-semibold mb-2">{category}</p>
            <p className="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                {description}
            </p>
        </div>
    </div>
);

const Projects: React.FC = () => {
    return (
        <section id="proyectos" className="py-20 md:py-32 bg-[#18181B]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white">Proyectos <span className="text-[#FFE600]">Destacados</span></h2>
                    <p className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto">Un vistazo a nuestro portafolio de proyectos que demuestran nuestra capacidad y experiencia.</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;