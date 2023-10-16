import PropTypes from "prop-types"

const MyTasks = function ({ tasks }) {
  return (
    <ul className="list-outside pl-8 list-img-task space-y-1">
      {tasks.map((line, i) => (
        <li key={i} className="pl-1 leading-6 hover:text-green-700 cursor-pointer">
          {line}
        </li>
      ))}
    </ul>
  )
}

MyTasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.string)
}

export default MyTasks