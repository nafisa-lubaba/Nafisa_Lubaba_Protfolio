import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGit } from 'react-icons/fa';

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "bg-orange-500", proficiency: 90 },
  { name: "CSS3", icon: FaCss3Alt, color: "bg-blue-500", proficiency: 85 },
  { name: "JavaScript", icon: FaJs, color: "bg-yellow-500", proficiency: 85 },
  { name: "React", icon: FaReact, color: "bg-cyan-500", proficiency: 80 },
  { name: "Git", icon: FaGit, color: "bg-red-500", proficiency: 75 },
];

const SkillCard = ({ icon: Icon, name, color, proficiency }) => (
  <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md border border-gray-100">
    <div className={`p-3 rounded-full mb-3 ${color}`}>
      <Icon className="w-8 h-8 text-white" />
    </div>
    <h3 className="text-lg font-medium text-gray-800">{name}</h3>
    <div className="w-full mt-2 bg-gray-200 rounded-full h-2">
      <div
        className={`h-full rounded-full ${color}`}
        style={{ width: `${proficiency}%` }}
      />
    </div>
  </div>
);

const Skills = () => (
  <section id="skills" className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            icon={skill.icon}
            name={skill.name}
            color={skill.color}
            proficiency={skill.proficiency}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
