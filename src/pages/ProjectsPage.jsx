import React, { useState, useEffect } from "react";
import { PageNavigation } from "../components/PageNavigation";

export const ProjectsPage = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
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

  const techStack = [
    { name: "React.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Express.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
    { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" }
  ];

  const features = [
    "Full-stack blogging platform with post creation and submission",
    "Multi-tier user role system (Admin, Approver, Blogger)",
    "Secure admin panel with comprehensive CRUD functionalities, Approver workflow for post review and publishing, Account suspension for policy violations",
    "Social features: comments, follow/unfollow, view counters, Media support for images and videos in posts & Social sharing capabilities"
  ];

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white p-2  relative overflow-hidden border-2 border-teal-200"
    >
      {/* Background layers - consistent with other pages */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:25px_25px] xs:bg-[size:30px_30px] sm:bg-[size:35px_35px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-50 via-transparent to-transparent"></div>

      {/* Floating effects - consistent styling */}
      <div className={`absolute bg-amber-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${
        isMobile 
          ? 'top-6 right-6 w-32 h-32 xs:top-8 xs:right-8 xs:w-40 xs:h-40 sm:top-12 sm:right-12 sm:w-48 sm:h-48' 
          : 'top-8 right-8 w-40 h-40 md:top-12 md:right-12 md:w-56 md:h-56 lg:top-16 lg:right-16 lg:w-72 lg:h-72'
      }`}></div>
      
      <div className={`absolute bg-orange-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${
        isMobile 
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
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .animate-scale-in { animation: scaleIn 0.6s ease-out forwards; }
        .professional-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(20, 184, 166, 0.15);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.08),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .tech-icon {
          transition: all 0.3s ease;
        }
        .tech-icon:hover {
          transform: translateY(-5px);
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
          className={`professional-card rounded-xl sm:rounded-2xl w-full max-w-full mx-auto animate-fade-in-up transition-opacity duration-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          } ${
            isMobile 
              ? 'p-4 xs:p-4 sm:p-4' 
              : 'p-4'
          }`}
          style={{ 
            maxWidth: '98%', 
            height: 'auto', 
            minHeight: '90%' 
          }}
        >
          {/* Project Header */}
          <div className="text-center mb-2">
            <h2 className={`font-bold text-slate-900 ${
              isMobile 
                ? 'text-xl xs:text-2xl sm:text-3xl' 
                : 'text-2xl lg:text-4xl'
            }`}>
              <span className="bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent">
                Company Projects
              </span>
            </h2>
            <p className={`text-slate-600 font-medium ${
              isMobile ? 'text-sm' : 'text-lg'
            }`}>
              94Stories | Blogging Platform
            </p>
          </div>

          {/* Tech Stack Section */}
          <div className="mb-2">
            <h3 className={`font-bold text-slate-800 mb-1 ${
              isMobile ? 'text-sm' : 'text-md'
            }`}>
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-2 ">
              {techStack.map((tech, index) => (
                <div 
                  key={tech.name}
                  className="flex flex-col items-center tech-icon animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={` ${
                    isMobile ? 'w-5 h-5' : 'w-5 h-5 md:w-4 md:h-4 lg:w-7 lg:h-7'
                  }`}>
                    <img 
                      src={tech.image} 
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className={`text-slate-700 font-medium mt-1 ${
                    isMobile ? 'text-xs' : 'text-xs'
                  }`}>
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          
          {/* Key Features */}
          <div className="mb-2">
            <h3 className={`font-bold text-slate-800 my-2 ${
              isMobile ? 'text-sm' : 'text-md'
            }`}>
              Project Overview
            </h3>
            <div className="grid grid-cols-1 gap-1 lg:gap-3">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start animate-slide-in-left"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-teal-500 mr-1 lg:mr-3 -mt-1 flex-shrink-0">•</span>
                  <span className={`text-slate-700 ${
                    isMobile ? 'text-xs' : 'text-xs lg:text-sm'
                  }`}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageNavigation onPrev={onPrev} onNext={onNext} page={page} totalPages={totalPages} />
    </div>
  );
});