"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

const education = [
  {
    institution: "Veermata Jijabai Technological Institute, Mumbai",
    degree: "B.Tech in Information Technology",
    period: "Sep 2024 - May 2027",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    institution: "K J Somaiya Polytechnic, Vidyavihar",
    degree: "Diploma in Computer Engineering",
    period: "Aug 2021 - June 2024",
    achievement: "98.10%, State Merit Rank 11",
    icon: <GraduationCap className="h-6 w-6" />,
  },
  {
    institution: "New Ideal School & Jr. College, Vasind",
    degree: "SSC",
    period: "June 2008 - June 2021",
    achievement: "97.20%",
    icon: <GraduationCap className="h-6 w-6" />,
  },
]

const achievements = [
  {
    title: "Winner - ATMECS Global GenAI Hackathon 2024",
    organization: "ATMECS Technologies",
    date: "Oct 2024",
    details: [
      "Developed MindCare, an AI-powered mental health support system, leading the team to 1st place among 4,900+ participants.",
      "Designed and implemented advanced AI models for personalized mental health assistance.",
    ],
  },

  {
    title: "Winner - Ideathon 2025 at Rajiv Gandhi Institute of Technology",
    date: "March, 2025",
    details: [
      "Led a team to first place in Ideathon 2025, a competition focused on innovative solutions in technology and sustainability.",
      "Collaborated with a multidisciplinary team to design and present the solution, showcasing strong leadership and communication skills.",
    ],
  },
  {
    title: "Winner - State-Level Technical Paper Presentation (WINGS-2023)",
    date: "Jan 2022",
    details: [
      "Presented a paper on Big Data Analytics with Hadoop, showcasing expertise in distributed computing and Hadoop ecosystem tools.",
      "Highlighted practical applications of HDFS, MapReduce, and YARN for large-scale data processing.",
    ],
  },
]

const certifications = [
  "Cisco Networking Academy: Introduction to Cyber Security",
  "Infosys: HTML Web Development Crash Course",
]

export default function Education() {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="education" className="py-20 px-4 md:px-8 lg:px-16 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Education & Achievements
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold mb-6"
            >
              Education
            </motion.h3>

            <motion.div
              ref={ref}
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="space-y-6"
            >
              {education.map((edu, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="p-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white mr-4">
                          {edu.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold">{edu.institution}</h3>
                          <p className="text-muted-foreground">{edu.degree}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-sm text-muted-foreground">{edu.period}</span>
                            {edu.achievement && (
                              <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-pink-700">
                                {edu.achievement}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <div className="mb-12">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-6"
              >
                Achievements
              </motion.h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                className="space-y-6"
              >
                {achievements.map((achievement, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="p-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-white mr-4">
                            <Award className="h-6 w-6" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">{achievement.title}</h3>
                            {achievement.organization && (
                              <p className="text-muted-foreground">{achievement.organization}</p>
                            )}
                            <p className="text-sm text-muted-foreground">{achievement.date}</p>
                            <ul className="mt-2 space-y-1">
                              {achievement.details.map((detail, i) => (
                                <li key={i} className="flex items-start text-sm">
                                  <div className="min-w-2 h-2 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 mt-2 mr-2"></div>
                                  <span>{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="text-2xl font-semibold mb-6"
              >
                Certifications
              </motion.h3>

              <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"}>
                <motion.div variants={itemVariants}>
                  <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <ul className="space-y-3">
                        {certifications.map((cert, index) => (
                          <li key={index} className="flex items-start">
                            <div className="min-w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mr-2"></div>
                            <span>{cert}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

