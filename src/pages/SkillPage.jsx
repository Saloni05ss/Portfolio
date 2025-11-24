import React, { useState, useEffect } from "react";
import { PageNavigation } from "./PageNavigation";

export const SkillPage = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "JavaScript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
        { name: "TypeScript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" }
      ],
      color: "from-blue-800 to-blue-600"
    },
    {
      title: "Web Frontend Technologies",
      skills: [
        { name: "HTML", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
        { name: "CSS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
        { name: "React.js", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
        { name: "Three.js", imgUrl: "https://threejs.org/files/favicon.ico" },
        { name: "GSAP", imgUrl: "https://avatars.githubusercontent.com/u/2386673?v=4" },
        { name: "Tailwind CSS", imgUrl: "https://images.seeklogo.com/logo-png/35/1/tailwind-css-logo-png_seeklogo-354675.png" }
      ],
      color: "from-orange-800 to-orange-600"
    },
    {
      title: "Backend Technologies",
      skills: [
        { name: "Node.js", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
        { name: "Express.js", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
        { name: "RESTful API", imgUrl: "https://cdn-icons-png.flaticon.com/512/595/595067.png" }
      ],
      color: "from-violet-600 to-purple-600"
    }
  ];

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white p-2 xs:p-3 sm:p-4 md:p-6 relative overflow-hidden border-2 border-teal-200"
    >
      {/* Background layers - consistent with About page */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:25px_25px] xs:bg-[size:30px_30px] sm:bg-[size:35px_35px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent"></div>

      {/* Floating effects - consistent styling */}
      <div className={`absolute bg-blue-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${isMobile
          ? 'top-6 right-6 w-32 h-32 xs:top-8 xs:right-8 xs:w-40 xs:h-40 sm:top-12 sm:right-12 sm:w-48 sm:h-48'
          : 'top-8 right-8 w-40 h-40 md:top-12 md:right-12 md:w-56 md:h-56 lg:top-16 lg:right-16 lg:w-72 lg:h-72'
        }`}></div>

      <div className={`absolute bg-purple-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${isMobile
          ? 'bottom-6 left-4 w-40 h-40 xs:bottom-8 xs:left-6 xs:w-48 xs:h-48 sm:bottom-12 sm:left-8 sm:w-56 sm:h-56'
          : 'bottom-8 left-6 w-48 h-48 md:bottom-12 md:left-8 md:w-64 md:h-64 lg:bottom-16 lg:left-12 lg:w-80 lg:h-80'
        }`} style={{ animationDelay: '2s' }}></div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        @keyframes stagger {
          from { opacity: 0; transform: translateX(-10px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-stagger { animation: stagger 0.6s ease-out forwards; }
        .professional-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(20, 184, 166, 0.15);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.08),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .skill-pill {
          backdrop-filter: blur(10px);
        }
        .skill-pill:hover {
          transform: translateY(-2px);
        }

        /* Custom breakpoint for extra small screens */
        @media (max-width: 480px) {
          .xs\\:p-3 {
            padding: 0.75rem;
          }
          .xs\\:top-8 {
            top: 2rem;
          }
          .xs\\:right-8 {
            right: 2rem;
          }
          .xs\\:w-40 {
            width: 10rem;
          }
          .xs\\:h-40 {
            height: 10rem;
          }
        }
      `}</style>

      <div className="flex flex-col justify-center items-center h-full w-full">
        <div
          className={`professional-card rounded-xl sm:rounded-2xl w-full max-w-full mx-auto animate-fade-in-up transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"
            } ${isMobile
              ? 'p-4 xs:p-5 sm:p-6'
              : 'p-4 lg:p-10'
            }`}
          style={{
            maxWidth: '98%',
            height: 'auto',
            minHeight: '90%'
          }}
        >
          {/* Heading */}
          <h2 className={`font-bold text-slate-900 mb-2 text-center ${isMobile
              ? 'text-xl xs:text-2xl sm:text-3xl'
              : 'text-2xl lg:text-4xl'
            }`}>
            <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>

          <div>
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="animate-fade-in-up"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                {/* Category Title */}
                <h3 className="font-semibold my-1 lg:my-2 text-sm">
                  <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                    {category.title}
                  </span>
                </h3>

                {/* Skills Grid with Images */}
                <div
                  className={`grid gap-1 lg:gap-3 ${isMobile ? "grid-cols-3 xs:grid-cols-3 sm:grid-cols-3" : "grid-cols-3 md:grid-cols-4 "
                    }`}
                >
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-pill rounded-full p-2 flex flex-col justify-center items-center animate-stagger"
                      style={{ animationDelay: `${categoryIndex * 0.2 + skillIndex * 0.1}s` }}
                    >
                      <img
                        src={skill.imgUrl}
                        alt={skill.name}
                        className={`${isMobile ? "w-4 h-4" : "w-4 h-4 md:w-3 md:h-3 lg:w-4 lg:h-4"}`}
                      />
                      <div className="text-xs text-center">
                      {skill.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      <PageNavigation onPrev={onPrev} onNext={onNext} page={page} totalPages={totalPages} />
    </div>
  );
});