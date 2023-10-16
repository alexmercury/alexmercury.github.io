import PropTypes from "prop-types"
import { Fragment, useState, useRef } from "react"
import { Tab, Transition } from "@headlessui/react"
import { Circle, CircleFill } from "react-bootstrap-icons"
import ImgMedia from "../../ImgMedia"

const ImgTabs = function ({ images }) {
  const [tabIndex, setTabIndex] = useState(0)
  const containerEl = useRef(null)

  const minHeight = () => {
    if (containerEl && containerEl.current) {
      return containerEl.current.offsetHeight
    } else {
      return "auto"
    }
  }

  return (
    <div className="w-full" ref={containerEl} style={{minHeight: minHeight()}}>
      <Tab.Group selectedIndex={tabIndex} onChange={setTabIndex}>
        <Tab.Panels>
          {images.map((img, i) => (
            <Tab.Panel key={i}>
              <Transition
                appear={true}
                show={i === tabIndex}
                enter="duration-700"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ImgMedia
                  className="lg:max-w-5xl md:w-full mx-auto transition-opacity"
                  img={img}
                  alt={`IMG-${i}`}
                />    
              </Transition>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List className="w-full flex flex-row justify-center space-x-4 pt-4">
          {(images.length > 1) && images.map((_img, i) => (
            <Tab key={i} as={Fragment} className="text-gray-500 cursor-pointer">
              {({ selected }) => {
                if (selected) {
                  return <CircleFill size={24} />
                } else {
                  return <Circle size={24} />
                }
              }}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </div>
  )
}

ImgTabs.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object)
}

export default ImgTabs