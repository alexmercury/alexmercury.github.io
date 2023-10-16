import PropTypes from "prop-types"
import {
  Linkedin,
  Github,
  Skype,
  Telegram
} from "react-bootstrap-icons"
import WordsCarousel from "../WordsCarousel"
import SocialIconLink from "../SocialIconLink"

import avatar from "/img/avatar/256.jpeg"
import avatarX2 from "/img/avatar/512.jpeg"
import avatarX4 from "/img/avatar/1024.jpeg"
import avatarX5 from "/img/avatar/1280.jpeg"

const AboutSection = function ({ profile }) {
  return (
    <section className="container mx-auto pb-12">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start space-y-10 sm:space-y-0 sm:space-x-10 px-4">
        <div className="pt-4 sm:pt-12">
          <h1 className="text-yellow-500 text-3xl font-bold">{profile.title}</h1>

          <h2 className="text-white font-bold text-xl sm:text-2xl pt-6">
            <WordsCarousel text="I Am" items={profile.positions}/>
          </h2>

          <div className="pt-4 text-white text-lg whitespace-pre-line">
            {profile.descriptions.join("\n")}
          </div>

          <div className="flex flex-row space-x-6 items-center pt-8">
            <SocialIconLink href={profile.social.linkedin} icon={Linkedin} />
            <SocialIconLink href={profile.social.github} icon={Github} />
            <SocialIconLink href={profile.social.skype} icon={Skype} />
            <SocialIconLink href={profile.social.telegram} icon={Telegram} />
          </div>
        </div>
  
        <img
          className="basis-64 h-64 ring-4 ring-yellow-500 rounded-full"
          src={avatar}
          srcSet={`${avatar}, ${avatarX2} 2x, ${avatarX4} 4x, ${avatarX5} 5x`}
          width={256}
          height={256}
          alt="Avatar"
        />
      </div>
    </section>
  )
}

AboutSection.propTypes = {
  profile: PropTypes.object.isRequired
}

export default AboutSection