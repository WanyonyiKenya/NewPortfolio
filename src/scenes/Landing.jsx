import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Socials from "../components/Socials";

const Landing = ({ setPageOn }) => {
  const aboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center md:h-full gap-16 py-10"
    >
      {/* Profile image   md:order-2 allows the image to be second in order of items displayed in the section, on the rightside*/}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {aboveMediumScreens ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20
                before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2
                before:border-b before:z-[-1]"
          >
            <img
              alt="profile"
              src="assets/profile-image.png"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                        max-w-[400px] md:max-w-[600px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src="assets/profile-image.png"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px] "
          />
        )}
      </div>
      {/* text center */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 5 }}
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Brian{" "}
            <span
              className="xs:relative xs:text-blue xs:font-semibold z-20
                     xs:before:content-brush before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              Wanyonyi
            </span>
          </p>
          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            I can showcase my talent and enhance my skills to meet the company’s
            goals as well as improving myself professionally and as an
            individual.
          </p>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.2, duration: 7 }}
          variants={{
            hidden: { opacity: 0, x: -80 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
                     hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setPageOn("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setPageOn("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              lets talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.1, duration: 10 }}
          variants={{
            hidden: { opacity: 0, x: -100 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <Socials />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
