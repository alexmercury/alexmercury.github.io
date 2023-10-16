import PropTypes from "prop-types"

const DescriptionSection = function ({ description }) {
  return (
    <section className="px-4 pt-4 text-sm md:text-lg">
      <h3 className="font-bold uppercase border-b border-slate-300 mb-4 pb-4">Description</h3>
      {description.map((line, i) => (
        <div key={i} className="whitespace-pre-line indent-4 break-words">
          {line}
        </div>
      ))}
    </section>
  )
}

DescriptionSection.propTypes = {
  description: PropTypes.arrayOf(PropTypes.string)
}

export default DescriptionSection