import PropTypes from "prop-types"
import { createElement } from "react"

const InfoItem = function ({ className, icon, title, text, children }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex flex-row justify-start items-center">
        <div className="basis-6 text-gray-800 mr-4 my-4">
          {createElement(icon, { size: 24 })}
        </div>
        <div className="text-md font-bold text-gray-800 mr-4" >{title}</div>
        <div className="text-md font-normal text-gray-700" >{text}</div>
      </div>
      {children && <div>{children}</div>}
    </div>
  )
}

InfoItem.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.any,
  title: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string
}

export default InfoItem