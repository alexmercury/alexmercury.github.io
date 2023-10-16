import PropTypes from "prop-types"
import { Fragment, useState, useEffect } from "react"
import { Transition } from "@headlessui/react"
import ImageLink from "./ImageLink"

const ProjectItem = function ({ project, index }) {
  const [isOpen, setIsOpen] = useState(false)
  const delay = index * 100

  useEffect(() => {
    setIsOpen(false)
    const timer = setTimeout(async () => {
      setIsOpen(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <Transition
      appear={true}
      show={isOpen}
      as={Fragment}
      enter="ease-out delay-200 duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="basis-full md:basis-1/2 xl:basis-1/3 p-4 group">
        <ImageLink project={project} />
      </div>
    </Transition>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

ProjectItem.defaultProps = { 
  project: {},
  index: 0
} 

export default ProjectItem