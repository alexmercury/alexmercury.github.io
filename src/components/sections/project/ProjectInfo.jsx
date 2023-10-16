import PropTypes from "prop-types"
import { Globe, CalendarRange, PencilSquare, BoxSeam } from "react-bootstrap-icons"
import InfoItem from "./info/InfoItem"
import TechList from "./info/TechList"
import MyTasks from "./info/MyTasks"

const ProjectInfo = function ({ project }) {
  const projStatus = () => {
    if (project.avaliable) {
      return (
        <span className="text-blue-500">Project in production</span>
      )
    } else {
      return (
        <span className="text-red-500">Project is frozen or suspended</span>
      )
    }
  }

  return (
    <div className="w-full px-4 pb-4 flex flex-col border border-gray-300 bg-gray-50 ">
      <InfoItem
        className="border-b border-gray-300"
        icon={Globe}
        title="Availability:"
        text={projStatus()}
      />

      <InfoItem
        className="border-b border-gray-300"
        icon={CalendarRange}
        title="Time period:"
        text={`${project.date.from} - ${project.date.to}`}
      />

      <InfoItem
        className="border-b border-gray-300"
        icon={BoxSeam}
        title="Tools:"
        text={<TechList list={project.techList} />}
      />

      <InfoItem
        icon={PencilSquare}
        title="My Tasks:"
      >
        <MyTasks tasks={project.myTasks} />
      </InfoItem>
    </div>
  )
}

ProjectInfo.propTypes = {
  project: PropTypes.object
}

export default ProjectInfo