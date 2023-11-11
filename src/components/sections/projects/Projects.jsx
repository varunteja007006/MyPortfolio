import SectionBodyOnly from "../../framerMotion/SectionBodyOnly";
import projectData from "../../../data/projectData";
import ProjectCard from "../../framerMotion/ProjectCard";

function Projects() {
  return (
    <SectionBodyOnly title={"PROJECTS"} customClass={"p-10 section-border"}>
      {projectData.map((item) => {
        const data = {
          title: item.project_title,
          subtitle: item.project_subtitle,
          badges: item.project_badges,
          description: item.project_description,
          github: item.project_github,
          link: item.project_link,
          images: item.project_images,
        };
        return item.show && <ProjectCard key={item.id} data={data} />;
      })}
    </SectionBodyOnly>
  );
}

export default Projects;
