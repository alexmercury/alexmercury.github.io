import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { ArrowRightCircle } from "react-bootstrap-icons"
import ImgMedia from "../../ImgMedia"

const ImageLink = function ({ project }) {
  return (
    <Link
      to={`projects/${project.id}`}
      className="transition-all block mx-auto relative m-0 p-0 max-h-64 max-w-lg w-full overflow-hidden rounded-sm shadow-lg shadow-transparent group-hover:shadow-gray-700"
    >
      <ImgMedia
        className="transition duration-500 scale-100 ease-out group-hover:scale-105"
        img={project.img}
        alt={project.title}
      />

      <div className="absolute flex items-center justify-between h-14 px-4 inset-x-0 bottom-0 sm:-bottom-14 bg-black bg-opacity-70 transition-all ease-out duration-500 group-hover:bottom-0">
        <h3 className="text-white text-xl font-bold">
          {project.title} [{project.year}]
        </h3>

        <ArrowRightCircle size={24} className="text-yellow-500" />
      </div>
    </Link>
  )
}

ImageLink.propTypes = {
  project: PropTypes.object.isRequired
}

export default ImageLink