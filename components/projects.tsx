"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Brain, Car, Building, ExternalLink, Github, FileText } from "lucide-react"

const projects = [
  {
    title: "MindCare",
    description: "AI-Powered Mental Health Support Platform",
    icon: <Brain className="h-6 w-6" />,
    color: "from-pink-500 to-purple-500",
    details: [
      "Engineered machine learning models for heart rate analysis using proximity sensor data, enhancing physiological stress detection accuracy by 25%.",
      "Implemented real-time mood assessment and tracking.",
      "Developed an LLM-powered chatbot for personalized mental health support, capable of generating context-aware scenarios for user engagement.",
    ],
    technologies: ["Python", "Django", "Flutter", "GenAI", "LLMs"],
    achievement: "Winner - ATMECS Global GenAI Hackathon 2024",
    demoLink: "https://www.mindscare.me/",
    showDemo: true,
  },
  {
    title: "ScribeAI",
    description: "AI-Powered Multilingual Notes Generation Platform",
    icon: <FileText className="h-6 w-6" />,
    color: "from-blue-500 to-green-500",
    details: [
      "Created an app that generates concise notes from video content.",
      "Enabled uploading of supporting documents for comprehensive note synthesis.",
      "Develop a Chrome extension that integrates with Google Meet, allowing users to activate transcription features directly within their meetings.",
      "Added multilingual support for generating and downloading notes in various languages.",
    ],
    technologies: ["Python", "Streamlit", "Gemini", "NLP"],
    githubLink: "https://github.com/bsakshiii/ScribeAI",
  },
  {
    title: "Decab",
    description: "Decentralized Ride-Hailing System",
    icon: <Car className="h-6 w-6" />,
    color: "from-purple-500 to-blue-500",
    details: [
      "Built a blockchain-powered ride-sharing platform using Ethereum smart contracts and MetaMask.",
      "Integrated Google Maps API for real-time booking and Web3.js for blockchain interaction.",
    ],
    technologies: ["Solidity", "Truffle", "Ganache", "React.js"],
    githubLink: "https://github.com/bsakshiii/Decab",
  },
  {
    title: "MySoc",
    description: "Society Management System",
    icon: <Building className="h-6 w-6" />,
    color: "from-blue-500 to-indigo-500",
    details: [
      "Developed a cross-platform app for society management, serving 500+ residents with features like real-time notice boards, visitor tracking, and complaint resolution.",
      "Integrated Firebase for seamless data management and deployment on Android and iOS.",
      "Implemented real-time notifications, increasing resident engagement by 30% and reducing missed announcements by 50%.",
    ],
    technologies: ["Flutter", "Firebase", "Android", "iOS"],
    githubLink: "https://github.com/TechTitansInheritance/MySoc",
  },
]

export default function Projects() {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`h-2 w-full bg-gradient-to-r ${project.color}`}></div>
                <CardContent className="p-6 flex-grow">
                  <div className="flex items-center mb-4">
                    <div className={`p-2 rounded-full bg-gradient-to-br ${project.color} text-white mr-3`}>
                      {project.title === "ScribeAI" ? (
                        <div className="h-6 w-6 flex items-center justify-center">
                          <img src="/images/scribeai-logo.png" alt="ScribeAI Logo" className="h-5 w-5 object-contain" />
                        </div>
                      ) : (
                        project.icon
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>

                  {project.achievement && (
                    <div className="mb-4">
                      <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600">
                        {project.achievement}
                      </Badge>
                    </div>
                  )}

                  <ul className="space-y-2 mb-4">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <div className="min-w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mt-2 mr-2"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="outline" className="bg-background/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-6 pt-0 flex justify-between">
                  {project.githubLink ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}

                  {project.showDemo && project.demoLink && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

