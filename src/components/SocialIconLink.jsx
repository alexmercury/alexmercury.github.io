import { createElement } from "react"
import PropTypes from "prop-types"

const SocialIconLink = function ({ href, icon }) {
  return (
    <a
      className="p-3 text-yellow-500 border-2 border-yellow-500 rounded-full transition-all ease-out duration-500 hover:bg-yellow-500 hover:text-slate-100"
      href={href || "/#"}
      target="_blank"
      rel="noreferrer"
    >
      {createElement(icon, { size: 18 })}
    </a>
  )
}

SocialIconLink.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.object.isRequired
}

export default SocialIconLink