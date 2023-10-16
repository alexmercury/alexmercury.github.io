import PropTypes from "prop-types"
import ImgTabs from "./project/ImgTabs"
import DescriptionSection from "./project/DescriptionSection"
import ProjectLinks from "./project/ProjectLinks"
import ProjectInfo from "./project/ProjectInfo"

const ProjectFullSection = function ({ project }) {
  const images = [project.img]
  if (project.img2) {
    images.push(project.img2)
  }

  return (
    <section className="h-full bg-white p-4 lg:p-6">
      <ImgTabs images={images} />

      <div className="flex flex-col py-6 xl:flex-row">
        <div className="xl:basis-1/2 shrink-0">
          <ProjectInfo project={project} />
        </div>
        <div className="xl:grow2">
          <ProjectLinks links={project.links} />
          <DescriptionSection description={project.description} />
        </div>
      </div>
    </section>
  )
}

ProjectFullSection.propTypes = {
  project: PropTypes.object.isRequired
}

ProjectFullSection.defaultProps = { 
  project: {}
} 

export default ProjectFullSection