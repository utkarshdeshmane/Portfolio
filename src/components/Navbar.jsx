import logo from "../assets/Logo.png"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

export const Navbar = () => {
  return(
    <nav className=" mb-20 flex items-center justity-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img src={logo} alt="Logo" />
    
    </div>
    <div className="m-5 flex items-center justify-center gap-4 text-3xl">
      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://github.com/utkarshdeshmane" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://linkedin.com/in/utkarsh-deshmane-8676a1210" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
  </nav>
  );
}
