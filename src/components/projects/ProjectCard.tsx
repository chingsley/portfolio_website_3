import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IProject } from '../../types/project.types';

interface ProjectCardProps extends IProject { };

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const { id, title, category, img: image } = props;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, }}
      transition={{
        ease: 'easeInOut',
        duration: 0.7,
        delay: 0.15,
      }}
    >
      <Link to={`/projects/${id}`} aria-label="Single Project">
        <div className="rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark">
          <div>
            <img
              src={image}
              className="rounded-t-xl border-none"
              alt="Single Project"
            />
          </div>
          <div className="text-center px-4 py-6">
            <p className="font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2">
              {title}
            </p>
            <span className="text-lg text-ternary-dark dark:text-ternary-light">
              {category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;