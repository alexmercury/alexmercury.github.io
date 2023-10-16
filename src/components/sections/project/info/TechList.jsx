import PropTypes from "prop-types"

const TechList = function ({ list }) {
  return (
    <span className="text-sm md:text-base">
      {list.map((tech, i) => (
        <span key={i}>
          {i === 0 ? null : <span> / </span>}
          <a key={i} className="hover:underline" href={tech.url} target="_blank" rel="noreferrer">
            {tech.name}
          </a>
        </span>
      ))}
    </span>
  )
}

TechList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
}

export default TechList