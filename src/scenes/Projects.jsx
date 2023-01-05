import React from "react";
import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const projVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 bg-grey z-30 flex-col justify-center items-center 
  transition duration-500 tezt-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();
  return (
    <motion.div variants={projVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p class></p>
      </div>
      <img
        src= {`../assets/${projectTitle}.jpeg`}
        alt = {projectTitle}
      />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            <span className="text-red">PROJ</span>ECTS
          </p>
        </div>
        <div className="flex justify-center mt-5">
          <LineGradient className="w-1/3" />
        </div>
        <p className="mt-10 mb-10">
          Front-End Web Developer with ReactJs, sometimes VueJs
        </p>
      </motion.div>
      {/* projects */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold ">
            Bee User Interfaces
          </div>
          <Project title='Project 1'/>
          <Project title='Project 2'/>
          {/* row 2 */}
          <Project title='Project 3'/>
          <Project title='Project 4'/>
          < Project title= 'Project-5' />
          
          {/* row 3 */}
          <Project title='Project 6'/>
          <Project title='Project 7'/>
          <Project title = 'Project 4'/>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
