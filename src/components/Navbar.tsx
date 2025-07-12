import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const socialLinks = [
  { platform: "github", url: "https://github.com", icon: "/src/asset/GitHub .svg" },
  { platform: "WeChat", url: "https://wechat.com", icon: "/src/asset/wechat.svg" },
  { platform: "Email", url: "mailto:momonga@outlook.com", icon: "/src/asset/Emil.svg" }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 py-4 rounded-2xl px-8 transition-all duration-300 ease-in-out
     ${isScrolled ? 'w-2/5 bg-white/90 shadow-lg border border-gray-200 backdrop-blur-sm' : 'w-1/2 bg-transparent border-transparent'}`}>
      <div className="flex items-center justify-between w-full">
        <div className="text-2xl font-bold text-gray-800 cursor-pointer">
          <Link to="/" className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Momonga
            </span>
          </Link>
        </div>

        <div className="flex items-center gap-8">
          <div className="relative">
            <Link 
              to="/" 
              className="font-medium text-gray-800"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Home
            </Link>
          </div>

          <div className="relative">
            <a 
              href="#skill" 
              className="font-medium text-gray-800"
              onClick={(e) => {
                e.preventDefault();
                const skillComponent = document.querySelector('.skill-component');
                if (skillComponent) {
                  window.scrollTo({
                    top: skillComponent.offsetTop - 160,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Skill
            </a>
          </div>

          <div className="relative">
            <a 
              href="#projects-section" 
              className="font-medium text-gray-800"
              onClick={(e) => {
                e.preventDefault();
                const projectsSection = document.getElementById('projects-section');
                if (projectsSection) {
                  window.scrollTo({
                    top: projectsSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Project
            </a>
          </div>


          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-500"
              >
                {link.icon.startsWith('/') ? (
                  <img src={link.icon} alt={link.platform} className="w-6 h-6" />
                ) : (
                  <i className={link.icon}></i>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}