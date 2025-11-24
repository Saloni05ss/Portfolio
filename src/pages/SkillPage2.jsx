import React, { useState, useEffect } from "react";
import { PageNavigation } from "./PageNavigation";

export const SkillPage2 = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
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
    title: "Database",
    skills: [
      { name: "MongoDB", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "PostgreSQL (Basic)", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
    ],
    color: "from-green-700 to-green-500"
  },
  {
    title: "Mobile Development",
    skills: [
      { name: "Dart", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg" },
      { name: "Flutter (Basic)", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" }
    ],
    color: "from-blue-600 to-blue-400"
  },
  {
    title: "3D Technologies",
    skills: [
      { name: "Blender", imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Blender_logo_no_text.svg/939px-Blender_logo_no_text.svg.png" }, // Blender icon placeholder
      { name: "Unreal Engine", imgUrl: "https://cdn.worldvectorlogo.com/logos/unreal-1.svg" }, // Unreal Engine placeholder
       { name: "Oculus", imgUrl: "https://cdn.dribbble.com/userupload/41752148/file/original-22141974a66cda8efeb1aafa7b04f4b1.jpg?resize=400x300" },
     
    ],
    color: "from-purple-600 to-violet-500"
  },
  {
    title: "Tools and Platforms",
    skills: [
      { name: "Git", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "Github", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
     
    ],
    color: "from-orange-600 to-orange-400"
  }
];

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white px-2 xs:px-3 sm:px-4 md:px-6  relative overflow-hidden border-2 border-teal-200"
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
          <div >
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
                  className={`grid gap-2 lg:gap-3 ${isMobile ? "grid-cols-3 xs:grid-cols-3 sm:grid-cols-3" : "grid-cols-3 md:grid-cols-4 "
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