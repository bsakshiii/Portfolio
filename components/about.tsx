"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16 bg-background/50">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-pink-200 to-purple-200 shadow-xl">
              <img src="/images/profile.png" alt="Sakshi Bhirud" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-300 to-purple-300 rounded-full opacity-50 blur-xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <p className="text-lg leading-relaxed">
              I'm a passionate Java and Python developer specializing in AI engineering and large language models. With
              strong fundamentals in data structures and algorithms, I build high-performance, intelligent systems using
              LangChain and GenAI technologies, driving real-world impact.
            </p>
            <p className="text-lg leading-relaxed">
              I specialize in developing advanced LLM solutions, like MindCare's context-aware chatbot, which improved
              mental health support effectiveness. My work includes implementing RAG architectures, optimizing ML
              models, and building scalable applications with Next.js, Firebase, and modern Python data stacks (NumPy,
              Pandas).
            </p>
            <p className="text-lg leading-relaxed">
              With a track record of academic and technical excellence—including 98.10% diploma score (State Rank 11)— I
              am committed to pushing boundaries in AI and LLM development while maintaining robust software engineering
              practices. My goal is to build AI-driven solutions that make a tangible difference.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

