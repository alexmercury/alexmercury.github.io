import PropTypes from "prop-types"
import { createElement } from "react"
import { Globe, Youtube, Link45deg, Linkedin, Twitter, Facebook, Instagram } from "react-bootstrap-icons"

const nameToIcon = function (name) {
  let icon = null
  switch (name) {
    case "home":
      icon = Globe
      break
    case "website":
      icon = Link45deg
      break
    case "youtube":
      icon = Youtube
      break
    case "linkedin":
      icon = Linkedin
      break
    case "twitter":
      icon = Twitter
      break
    case "facebook":
      icon = Facebook
      break
    case "instagram":
      icon = Instagram
      break
  }

  if (icon) {
    return createElement(icon, { className: "mr-1" })
  } else {
    return null
  }
}

const ProjectLinks = function ({ links }) {
  return (
    <section className="px-4 text-sm md:text-lg">
      <div className="flex flex-row flex-wrap py-4 justify-start items-center space-x-4 border-t border-b border-slate-300">
        <h3 className="font-bold">Links:</h3>
        {Object.entries(links).map(([name, data], i) => (
          <a
            key={i}
            href={data.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center underline text-blue-700 hover:no-underline hover:text-slate-800"
          >
            {nameToIcon(name)}
            {data.title}
          </a>
        ))}
      </div>
    </section>
  )
}

ProjectLinks.propTypes = {
  links: PropTypes.object
}

export default ProjectLinks