import React from "react";
import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const Skills = () => {
  const aboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient className="w-1/3" />
          <p className="mt-10 mb-7">
            Front-End Web Developer with ReactJs, sometimes VueJs
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {aboveMediumScreen ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
                            before:w-full  before:h-full before:border-2
                            before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                src="assets/skills-image.png"
                className="z-10"
              />
            </div>
          ) : (
            <img alt="skills" src="assets/skills-image.png" className="z-10" />
          )}
        </div>
      </div>
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 10 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className=" w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1] " />
          </div>
          <p className="mt-5">
            Technology was one of the main issues that drove me into this career
            path, I love gadgets,the thrill and excitement that comes with them.
            I always say programming chose me and in turn i fell in love with
            coding. I am pretty good in Vanilla Javascript, HTML, CSS and
            Bootsrap.
          </p>
        </motion.div>
        {/* innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.2, duration: 10 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className=" w-1/2 md:w-3/4 h-32 bg-red z-[-1] absolute right-0 top-0" />
          </div>
          <p className="mt-5">
           The point of innovation is to enable evryone have access to tech resources and services regardless of where they 
           come from and the devices he has. Innovation drives people and economies to the top. Programming and Innvatio go hand in hand,
           I am a forefront soldier in innovation.
          </p>
        </motion.div>
        {/* Immaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.4, duration: 10 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Immaginative
              </p>
            </div>
            <div className=" w-1/2 md:w-3/4 h-32 bg-yellow z-[-1] absolute right-0 top-0" />
          </div>
          <p className="mt-5">
            ISBN: 978-0-578-95208-6 Hailed by the NATS Bulletin as "the most
            successful, practical, and complete approach to German phonetics to
            date," German for Singers remains an effective and authoritative
            guide to German diction for singers of every genre..
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
