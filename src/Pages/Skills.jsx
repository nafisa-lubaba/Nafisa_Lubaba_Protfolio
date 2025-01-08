import React from 'react';
import AnimatedSectionHeading from '../Components/AnimatedSectionHeading';

import { motion } from 'framer-motion';
import 'animate.css';
import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiReact,
  DiGit,
  DiMongodb,
  DiNodejs,
} from 'react-icons/di';
import {
  SiTailwindcss,
  SiFigma,
  SiJson,
} from 'react-icons/si';
import {
  BsLayoutTextWindow,
  BsSpeedometer2,
} from 'react-icons/bs';

const SkillCard = ({ icon: Icon, name, color, proficiency, details }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="flex flex-col items-center p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 animate__animated animate__fadeIn">
        <div className={`p-3 rounded-lg mb-3 ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="font-medium text-gray-800">{name}</h3>

        <div className="w-full mt-2">
          <div className="bg-gray-200 rounded-full h-1.5">
            <div
              className={`h-full rounded-full ${color.replace(
                'bg-',
                'bg-opacity-80 bg-'
              )} transition-all duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100`}
              style={{ width: `${proficiency}%` }}
            />
          </div>
        </div>

        <div className="absolute invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 -top-2 left-1/2 -translate-x-1/2 -translate-y-full w-48 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-xl z-10">
          <div className="text-center">
            <p className="font-semibold mb-1">{name}</p>
            <p className="text-xs text-gray-300">{details}</p>
          </div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-gray-900 transform rotate-45" />
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        {
          name: 'HTML5',
          icon: DiHtml5,
          color: 'bg-orange-500',
          proficiency: 90,
          details: 'Semantic HTML, Accessibility, SEO best practices',
        },
        {
          name: 'CSS3',
          icon: DiCss3,
          color: 'bg-blue-500',
          proficiency: 85,
          details: 'Flexbox, Grid, Animations, Custom Properties',
        },
        {
          name: 'JavaScript',
          icon: DiJavascript1,
          color: 'bg-yellow-500',
          proficiency: 85,
          details: 'ES6+, DOM manipulation, Async/Await',
        },
        {
          name: 'React',
          icon: DiReact,
          color: 'bg-cyan-500',
          proficiency: 80,
          details: 'Hooks, Context, Redux, Next.js',
        },
        {
          name: 'Tailwind CSS',
          icon: SiTailwindcss,
          color: 'bg-teal-500',
          proficiency: 90,
          details: 'Custom configurations, Responsive design, Components',
        },
        {
          name: 'Responsive Design',
          icon: BsLayoutTextWindow,
          color: 'bg-purple-500',
          proficiency: 85,
          details: 'Mobile-first approach, Cross-browser compatibility',
        },
      ],
    },
    {
      title: 'Backend & Tools',
      skills: [
        {
          name: 'Node.js',
          icon: DiNodejs,
          color: 'bg-green-600',
          proficiency: 75,
          details: 'Express.js, API development, Server management',
        },
        {
          name: 'MongoDB',
          icon: DiMongodb,
          color: 'bg-green-500',
          proficiency: 70,
          details: 'Schema design, Aggregation, Indexing',
        },
        {
          name: 'RESTful APIs',
          icon: SiJson,
          color: 'bg-red-500',
          proficiency: 80,
          details: 'API design, Authentication, Documentation',
        },
        {
          name: 'Git',
          icon: DiGit,
          color: 'bg-orange-600',
          proficiency: 85,
          details: 'Version control, Branching strategies, Collaboration',
        },
        {
          name: 'UI/UX Design',
          icon: SiFigma,
          color: 'bg-purple-600',
          proficiency: 75,
          details: 'Wireframing, Prototyping, User research',
        },
        {
          name: 'Web Performance',
          icon: BsSpeedometer2,
          color: 'bg-blue-600',
          proficiency: 80,
          details: 'Optimization, Caching, Load time reduction',
        },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-16 "
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
           <div className="text-center mb-4">
       
       <AnimatedSectionHeading text='Technical Skills' ></AnimatedSectionHeading>
     </div>
          <p className="mt-2 text-gray-50 max-w-2xl mx-auto text-xl">
            A comprehensive overview of my technical expertise and proficiency
            levels in various technologies and tools.
          </p>
        </motion.div>

        {skillCategories.map((category, index) => (
          <div key={index} className="mb-12">
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-6 text-gray-200"
            >
              {category.title}
            </motion.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {category.skills.map((skill, skillIndex) => (
                <SkillCard
                  key={skillIndex}
                  icon={skill.icon}
                  name={skill.name}
                  color={skill.color}
                  proficiency={skill.proficiency}
                  details={skill.details}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
