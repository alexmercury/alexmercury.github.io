import { useState, Fragment } from "react"
import PropTypes from "prop-types"
import { Dialog, Transition } from "@headlessui/react"
import { useNavigate, useLoaderData } from "react-router-dom"
import { ArrowLeftCircle } from "react-bootstrap-icons"
import delay from "./../helpers/delay"
import ProjectFullSection from "../components/sections/ProjectFullSection"

const Project = function () {
  let [isOpen, setIsOpen] = useState(true)
  const navigate = useNavigate()
  const project = useLoaderData()

  async function closeModal() {
    setIsOpen(false)
    await delay(400)
    navigate("/")
  }

  return (
    <Transition appear={true} show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-20" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 h-screen w-screen bg-slate-100 bg-opacity-60">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-500"
              enterFrom="left-full"
              leave="ease-in duration-500"
              leaveTo="left-full"
            >
              <Dialog.Panel
                className="proj bg-white transition-all border-l border-gray-800"
              >
                <Dialog.Title
                  as="div"
                  className="flex flex-row justify-stretch p-4 bg-gradient-to-r from-gray-800 to-slate-950"
                >
                  <button className="w-8 basis-8 text-yellow-500 mr-4 hover:text-slate-100" onClick={closeModal}>
                    <ArrowLeftCircle size={32} />
                  </button>
                  
                  <h2 className="text-white text-2xl font-bold basis-full text-center">
                    {project.title}
                  </h2>
                </Dialog.Title>
                <ProjectFullSection project={project} />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

Project.propTypes = {
  project: PropTypes.object
}

export default Project