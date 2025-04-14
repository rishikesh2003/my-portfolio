import { informacionYProyectosRivera } from "@/lib/data";
import TimelineItem from "./TimelineItem";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import MotionWrapper from "./MotionWrapper";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function ExperienceSection() {
  return (
    <section
      id="Rivera"
      className="py-12 bg-gradient-to-b from-muted/20 to-background"
    >
      <div className="container max-w-4xl mx-auto px-6 md:px-4">
        <MotionWrapper>
          <h2 className="text-2xl font-bold mb-8 text-center md:text-left flex items-center md:inline-block">
            <motion.span
              className="inline-block mr-2"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: [0, -10, 10, -5, 5, 0] }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              🏆
            </motion.span>{" "}
            Jorcaef Rivera Cusihuaman
          </h2>
        </MotionWrapper>
        <div className="mb-8">
          {informacionYProyectosRivera.map((job, index) => (
            <TimelineItem
              key={job.company + job.period}
              title={`👨‍💻 ${job.position} | ${job.company}`}
              subtitle={`🌍 ${job.location}`}
              date={`📅 ${job.period}`}
              isLast={index === informacionYProyectosRivera.length - 1}
              index={index}
            >
              <motion.div
                className="mt-3 p-4 bg-background/80 backdrop-blur-sm backdrop-filter rounded-lg border border-purple-500/20 dark:bg-card/10 dark:border-purple-500/10 shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center mb-3">
                  <div className="h-6 w-6 flex items-center justify-center rounded-full bg-purple-500/10 mr-2">
                    <Briefcase className="h-4 w-4 text-purple-500" />
                  </div>
                  <h4 className="text-sm font-medium">Presentación</h4>
                </div>
                <ul className="list-none ml-4 space-y-2 text-sm">
                  {job.achievements.map((achievement, i) => (
                    <motion.li
                      key={i}
                      className="text-muted-foreground relative pl-6"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * i }}
                      viewport={{ once: true }}
                    >
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
                {job.github && (
                  <motion.a
                    href={job.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center justify-center text-lg font-bold text-blue-500 hover:text-blue-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaGithub className="h-6 w-6 mr-2" />
                    🌟 Ver perfil en GitHub
                  </motion.a>
                  )}
                {job.blog && (
                  <motion.a
                    href={job.blog}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 flex items-center justify-center text-lg font-bold text-purple-500 hover:text-purple-700 transition-colors"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaLink className="h-6 w-6 mr-2" />
                    📝 Visita mi blog personal
                  </motion.a>
                  )}
            
              </motion.div>
            </TimelineItem>
          ))}
        </div>
      </div>
    </section>
  );
}
