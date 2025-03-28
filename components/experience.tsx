"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users } from "lucide-react"

const experiences = [
  {
    title: "Python Developer",
    company: "SQUAD Infotech, Vashi",
    period: "June 2023 - July 2023",
    type: "work",
    description: [
      "Developed Python apps using OOP, data structures, and libraries like NumPy and Pandas.",
      "Integrated RESTful APIs and used Git for version control in collaborative projects.",
    ],
  },
  {
    title: "Vice President",
    company: "Computer Society of India - KJSP, Mumbai",
    period: "March 2023 - June 2024",
    type: "leadership",
    description: [
      "Led workshops on web development (MERN stack) and emerging technologies (AI/ML).",
      "Mentored students in full-stack development and programming using Python and C++.",
    ],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 md:px-8 lg:px-16 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Experience
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-300 via-purple-300 to-blue-300 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <motion.div key={index} variants={itemVariants} className="mb-12 relative">
              <div className="hidden md:block absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 -ml-3.5 mt-1.5 flex items-center justify-center">
                {exp.type === "work" ? (
                  <Briefcase className="h-4 w-4 text-white" />
                ) : (
                  <Users className="h-4 w-4 text-white" />
                )}
              </div>

              <Card className="md:ml-12 border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <div className="min-w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mr-2"></div>
                        <span>{item}</span>
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

