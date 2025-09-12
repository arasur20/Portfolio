import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[300px]" // responsive card width
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 400,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        {/* Image */}
        <div className="relative w-full h-[180px] sm:h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-9 h-9 sm:w-10 sm:h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="github"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Title + Description */}
        <div className="mt-4">
          <h3 className="text-white font-bold text-[20px] sm:text-[24px]">
            {name}
          </h3>
          <p className="text-secondary text-[13px] sm:text-[14px] mt-1">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag.name}
              className={`text-[12px] sm:text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      {/* Heading */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>MY WORKS</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      {/* Intro text */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[14px] sm:text-[17px] leading-[24px] sm:leading-[30px] max-w-3xl"
        >
          Following projects showcase my skills and experience through
          real-world examples. Each project is briefly described with a link to
          the repository, reflecting my ability to solve complex problems, work
          with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="mt-10 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
