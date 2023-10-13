import ViteIcon from "../icons/ViteIcon"
import JSIcon from "../icons/JSIcon"
import ReactIcon from "../icons/ReactIcon"

const FooterSection = function () {
  return (
    <footer className="container mx-auto px-4 py-6 flex flex-col items-center md:space-y-0 md:flex-row md:justify-between border-t-2 border-yellow-500">
      <div className="order-2 pt-4 md:order-1 md:pt-0">
        <p className="text-white font-bold text-lg md:text-xl text-center">
          <span className="text-yellow-500">&copy; {new Date().getFullYear() } Alex Merkulov.&nbsp;</span>
          <span>All rights reserved.</span>
        </p>
      </div>
      <div className="flex flex-row items-center justify-center text-white text-sm md:text-md order-1 md:order-2">
        <span className="pr-4">Powered by:</span>
        <JSIcon size={24} useBrandColor={true} />
        <span className="px-2">+</span>
        <ViteIcon size={24} useBrandColor={true} />
        <span className="px-2">+</span>
        <ReactIcon size={24} useBrandColor={true} />
      </div>
    </footer>
  )
}

export default FooterSection