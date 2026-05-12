import type { Project } from "~/types";
import { Link } from "react-router";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="block transition-transform duration-300 hover:scale-105"
    >
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-700 overflow-hidden shadow-sm transition hover:shadow-md">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-cover"
        />
        <div className="p-4">
          <h3 className="text-3xl font-semibold text-blue-400 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-2 text-sm">{project.description}</p>
          <div className="flex justify-between items-center text-sm">
            <span>{project.category}</span>
            <span>{new Date(project.date).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
