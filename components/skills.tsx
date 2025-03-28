"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Database, Brain, FigmaIcon, GitBranch } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: <Code className="h-6 w-6" />,
    skills: ["Java", "Python", "Javascript"],
    color: "from-pink-500 to-pink-300",
  },
  {
    title: "Web Development",
    icon: <Globe className="h-6 w-6" />,
    skills: ["React", "Next.js", "JavaScript", "HTML", "CSS"],
    color: "from-purple-500 to-purple-300",
  },
  {
    title: "AI/ML",
    icon: <Brain className="h-6 w-6" />,
    skills: ["LangChain", "LLMs", "GenAI"],
    color: "from-blue-500 to-blue-300",
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    skills: ["SQL", "Firebase"],
    color: "from-indigo-500 to-indigo-300",
  },
  {
    title: "Design",
    icon: <FigmaIcon className="h-6 w-6" />,
    skills: ["Figma", "UI/UX Design"],
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Version Control",
    icon: <GitBranch className="h-6 w-6" />,
    skills: ["Git", "GitHub"],
    color: "from-purple-500 to-blue-500",
  },
]

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Technical Skills
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-full bg-gradient-to-br ${category.color} text-white mr-4`}>
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-2"></div>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

