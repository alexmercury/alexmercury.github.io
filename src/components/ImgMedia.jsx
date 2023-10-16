import PropTypes from "prop-types"

const ImgMedia = function ({ img, className, alt }) {
  let srcSetStr = ""

  for (const [key, value] of Object.entries(img)) {
    if (key === "x") {
      srcSetStr += value
    } else {
      srcSetStr += `, ${value} ${key}`
    }
  }

  return (
    <img
      className={className}
      src={img.x}
      srcSet={srcSetStr}
      alt={alt}
    />
  )
}

ImgMedia.propTypes = {
  img: PropTypes.object,
  className: PropTypes.any,
  alt: PropTypes.string
}

export default ImgMedia