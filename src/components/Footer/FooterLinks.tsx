import { Github, Linkedin } from 'lucide-react'

const FooterLinks = () => (
  <>
    <a
      href="https://github.com/leechiahwa"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400"
    >
      <Github />
    </a>
    <a
      href="https://www.linkedin.com/in/melvin-lee-681a63269/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-gray-400"
    >
      <Linkedin />
    </a>
  </>
)

export default FooterLinks
