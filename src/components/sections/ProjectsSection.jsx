import PropTypes from "prop-types"
import { useRef, useState } from "react"
import Button from "../Button"
import ProjectItem from "./projects/ProjectItem"

const ProjectsSection = function ({ projects }) {
  const [sort, setSort] = useState("descending")
  const containerEl = useRef(null)

  const minHeight = () => {
    if (containerEl && containerEl.current) {
      return containerEl.current.offsetHeight
    } else {
      return "auto"
    }
  }

  const sortMethods = {
    ascending: (a, b) => (a.year < b.year ? -1 : 1),
    descending: (a, b) => (a.year > b.year ? -1 : 1)
  }

  return (
    <section className="container mx-auto">
      <h2 className="text-center py-4 text-2xl font-bold">
        <span className="text-white">My&nbsp;</span>
        <span className="text-yellow-500">Portfolio</span>
      </h2>
      <div className="text-white text-lg text-center leading-none pb-6">
        <span>
          Here you can find some of the projects I have been involved in and have been successful
        </span>
        <br/>
        <small className="text-slate-400">
          (some may not be available at this time)
        </small>
        <br/>
        <span className="inline-block pt-6 w-20 border-b-2 border-yellow-500"> </span>
      </div>

      <div className="flex flex-row items-center justify-center space-x-4">
        <Button
          text="Newest project"
          active={sort === "descending"}
          onClick={() => setSort("descending")}
        />
        <Button
          text="Oldest project"
          active={sort === "ascending"}
          onClick={() => setSort("ascending")}
        />
      </div>

      <div
        className="w-full flex flex-row flex-wrap content-start py-6 px-4"
        ref={containerEl}
        style={{minHeight: minHeight()}}
      >
        {projects.sort(sortMethods[sort]).map((project, i) => (
          <ProjectItem key={project.id} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

ProjectsSection.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
}

ProjectsSection.defaultProps = { 
  projects: []
} 

export default ProjectsSection