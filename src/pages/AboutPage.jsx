import React, { useState, useEffect } from "react";
import { PageNavigation } from "./PageNavigation";

export const AboutPage = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
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

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white p-2 xs:p-3 sm:p-4 md:p-6 relative overflow-hidden border-2 border-teal-200"
    >
      {/* Background layers - responsive sizing */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:25px_25px] xs:bg-[size:30px_30px] sm:bg-[size:35px_35px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>

      {/* Floating effects - responsive positioning and sizing */}
      <div className={`absolute bg-teal-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${
        isMobile 
          ? 'top-6 right-6 w-32 h-32 xs:top-8 xs:right-8 xs:w-40 xs:h-40 sm:top-12 sm:right-12 sm:w-48 sm:h-48' 
          : 'top-8 right-8 w-40 h-40 md:top-12 md:right-12 md:w-56 md:h-56 lg:top-16 lg:right-16 lg:w-72 lg:h-72'
      }`}></div>
      
      <div className={`absolute bg-slate-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${
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
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .professional-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(20, 184, 166, 0.15);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.08),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
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
          <h2 className={`font-bold text-slate-900 mb-4 text-center ${
            isMobile 
              ? 'text-xl xs:text-2xl sm:text-3xl' 
              : 'text-2xl lg:text-4xl'
          }`}>
            <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          {/* Content paragraphs */}
          <div className={`space-y-3 xs:space-y-4 ${
            isMobile ? 'sm:space-y-4' : 'md:space-y-2 lg:space-y-6'
          }`}>
            <p className={`text-slate-700 leading-relaxed font-light ${
              isMobile 
                ? 'text-sm xs:text-base sm:text-md' 
                : 'text-sm lg:text-lg'
            }`}>
              I'm a <span className="font-medium text-teal-700">Full Stack Software Engineer</span> specializing in the{" "}
              <span className="font-medium text-slate-900">MERN stack</span>,{" "}
              <span className="font-medium text-slate-900">TypeScript</span>, and cross-platform apps using{" "}
              <span className="font-medium text-slate-900">Flutter</span>.
            </p>

            <p className={`text-slate-700 leading-relaxed font-light ${
              isMobile 
                ? 'text-sm xs:text-base sm:text-lg' 
                : 'text-sm lg:text-lg'
            }`}>
              I create immersive web and VR experiences with{" "}
              <span className="font-medium text-slate-900">Three.js</span>,{" "}
              <span className="font-medium text-slate-900">React Three Fiber</span>,{" "}
              and <span className="font-medium text-slate-900">GSAP</span>, blending design and technology for interactive 3D environments.
            </p>

            <p className={`text-slate-700 leading-relaxed font-light ${
              isMobile 
                ? 'text-sm xs:text-base sm:text-lg' 
                : 'text-sm lg:text-lg'
            }`}>
              Skilled in backend APIs, database design, and VR development using{" "}
              <span className="font-medium text-slate-900">Blender</span> and{" "}
              <span className="font-medium text-slate-900">Unreal Engine</span>.
            </p>
          </div>
        </div>
      </div>

      <PageNavigation onPrev={onPrev} onNext={onNext} page={page} totalPages={totalPages} />
    </div>
  );
});