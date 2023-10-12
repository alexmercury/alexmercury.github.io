import PropTypes from "prop-types"
import { Briefcase } from "react-bootstrap-icons"

const HeaderSection = function ({ title }) {
  return (
    <header className="container mx-auto p-6">
      <div className="flex flex-row items-center justify-between">
        <Briefcase size={48} className="text-yellow-500" />

        <div className="basis-auto sm:basis-64 text-center text-white text-xl font-bold lg:text-2xl">
          {title}
        </div>
      </div>
    </header>
  )
}

HeaderSection.propTypes = {
  title: PropTypes.string.isRequired
}

export default HeaderSection