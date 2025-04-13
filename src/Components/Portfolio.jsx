import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import youtube from '../assets/youtube.jpg'
import Reveal from './Reveal';

const Portfolio = () => {
    const projects = [
        {
            img: youtube,
            title: 'Project #1',
            description: 'YouTube Clone using React',
            links: {
                site: '#',
                github: '#',
            },
        },
        {
            img: youtube,
            title: 'Project #2',
            description: 'Another React Project',
            links: {
                site: '#',
                github: '#',
            },
        },
        {
            img: youtube,
            title: 'Project #3',
            description: 'A cool frontend project',
            links: {
                site: '#',
                github: '#',
            },
        },
        {
            img: youtube,
            title: 'Project #4',
            description: 'My latest React project',
            links: {
                site: '#',
                github: '#',
            },
        },
    ];

    return (
        <div className='max-w-[1000px] mx-auto p-6 md:my-20' id='portfolio'>
            <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
            {projects.map((project, index) => (
                <Reveal key={index}>
                <div key={index} className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                    <div className='w-full md:w-1/2 p-4'>
                        <img src={project.img} alt={project.title} className='w-full h-full rounded-lg shadow-lg object-cover' />
                    </div>
                    <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                        <h3 className='text-2xl font-semibold mb-4 text-gray-200'>{project.title}</h3>
                        <p className='text-gray-300 mb-4'>{project.description}</p>
                        <div className='flex space-x-4'>
                            <a 
                                href={project.links.site} 
                                className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300'
                            >
                                View Site
                            </a>
                            <a 
                                href={project.links.github} 
                                className='px-4 py-2 bg-gray-800 text-gray-200 rounded-lg hover:bg-gray-900 transition duration-300 flex items-center space-x-2'
                            >
                                <AiFillGithub className='text-xl' />
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>
                </Reveal>
            ))}
        </div>
    );
};

export default Portfolio;
