import { useLoaderData, Outlet } from "react-router-dom"
import HeaderSection from "../components/sections/HeaderSection"
import AboutSection from "../components/sections/AboutSection"
import ProjectsSection from "../components/sections/ProjectsSection"
import FooterSection from "../components/sections/FooterSection"

const Home = function () {
  const homeData = useLoaderData()

  return(
    <main className="w-screen min-h-screen flex flex-col">
      <HeaderSection title={homeData.profile.fullName} />
      <AboutSection profile={homeData.profile} />
      <ProjectsSection projects={homeData.projects} />
      <FooterSection />
      <Outlet />
    </main>
  )
}

export default Home