import PropTypes from "prop-types"

const Button = function ({ text, onClick, active }) {
  const classes = [
    "rounded-full px-4 py-3",
    "font-bold text-lg",
    "hover:bg-yellow-500 hover:text-slate-100",
    "transition-all ease-out duration-500"
  ]

  if (active) {
    classes.push("bg-yellow-500 text-slate-100")
  } else {
    classes.push("bg-white text-slate-950")
  }

  return (
    <button
      className={classes.join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
}

Button.defaultProps = { 
  onClick: () => {}
} 

export default Button