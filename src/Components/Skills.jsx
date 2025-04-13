import { div } from 'framer-motion/client'
import React from 'react'
import{
    DiHtml5,
    DiCss3,
    DiSass,
    DiBootstrap,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiGithubBadge,
} from 'react-icons/di'
import Reveal from './Reveal'

const skills=[
    {
        catagory :'Frontend',
        technologies:[
            {name:'HTML', icon:<DiHtml5 className='text-orange-600'/>},
            {name:'CSS', icon:<DiCss3 className='text-blue-600'/>},
            {name:'Sass', icon:<DiSass className='text-pink-600'/>},
            {name:'Bootstrap', icon:<DiBootstrap className='text-purple-600'/>},
            {name:'JavaScript', icon:<DiJavascript1 className='text-yellow-600'/>},
            {name:'React', icon:<DiReact className='text-blue-600'/>},        ],
    },
    {
        catagory :'Fullstack',
        technologies:[
            {name:'React', icon:<DiReact className='text-blue-600'/>},
            {name:'GitHub', icon:<DiGithubBadge className='text-gray-600'/>},
        ],
    },

]

const Skills = () => {
  return (
    <div className='max-w-[650px] mx-auto flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12' id='skills'>
        <Reveal>
        <h2 className='text-3xl text-center font-bold md-4'> Skills</h2>
        <p className='mb-8 text-center'>
            I worked on various frontend and full stack projects. Check them <a href="#" className='underline'></a>there.
        </p>
        <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 '>
            {skills.map((skill,index)=>(
                <div key={index} className='border border-purple-900 p-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>
                        <h3 className='text-center font-bold mb-4 text-xl'>{skills.catagory}</h3>
                        <div className='grid grid-cols-2 gap-6'>
                            {skill.technologies.map((tech,idx)=>(
                                <div key={idx} className='flex items-center space-x-2'>
                                       <span className='text-2xl'>{tech.icon}</span>
                                       <span>{tech.name}</span>
                                </div>
                            ))}
                        </div>
                </div>
            ))}
        </div>
        </Reveal>
    </div>
  )
}

export default Skills