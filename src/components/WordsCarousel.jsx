import PropTypes from "prop-types"
import { Fragment, useEffect, useState } from "react"
import { Transition } from "@headlessui/react"
import delay from "../helpers/delay"

const WordsCarousel = function ({ text, items }) {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(true)
  const maxIndex = items.length - 1

  useEffect(() => {
    const interval = setInterval(async () => {
      setIsOpen(false)
      await delay(2400)
      setIndex((index < maxIndex) ? (index + 1) : 0)
      setIsOpen(true)
    }, 4000)

    return () => clearInterval(interval)
  }, [index, maxIndex])

  const item = items[index]

  return (
    <span className="inline-flex flex-row items-start justify-start">
      <span className="whitespace-nowrap">{text}&nbsp;</span>
      <Transition
        appear={true}
        show={isOpen}
        as={Fragment}
        enter="ease-out delay-1000 duration-2000"
        enterFrom="w-0"
        enterTo="w-full"
        leave="ease-in duration-2000"
        leaveFrom="w-full"
        leaveTo="w-0"
      >
        <span className="max-w-min overflow-hidden transition-all whitespace-nowrap border-r-2 border-white animate-border-blink">
          {item}&nbsp;
        </span>
      </Transition>
    </span>
  )
}

WordsCarousel.propTypes = {
  text: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default WordsCarousel