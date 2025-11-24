import React, { useState, useEffect } from "react";
import { PageNavigation } from "../components/PageNavigation";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

export const CoverPage1 = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
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

  const contactButtons = [
    {
      icon: <Mail className="text-white" />,
      label: "Email",
      href: "mailto:your.email@example.com",
    },
    {
      icon: <Phone className="text-white" />,
      label: "Phone",
      href: "tel:+1234567890",
    },
    {
      icon: <Linkedin className="text-white" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/yourprofile",
    },
    {
      icon: <Github className="text-white" />,
      label: "GitHub",
      href: "https://github.com/yourusername",
    }
  ];

  const getIconSize = () => {
    if (typeof window === 'undefined') return 16;
    const width = window.innerWidth;
    if (width < 480) return 12;
    if (width < 640) return 14;
    if (width < 768) return 16;
    if (width < 1024) return 14;
    return 16;
  };

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white p-2 xs:p-3 sm:p-4 md:p-6 relative overflow-hidden border-2 border-teal-200"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:25px_25px] xs:bg-[size:30px_30px] sm:bg-[size:35px_35px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
      
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 via-transparent to-transparent"></div>

      {/* Floating orbs */}
      <div className={`absolute bg-slate-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${
        isMobile 
          ? 'top-3 right-3 w-20 h-20 xs:top-4 xs:right-4 xs:w-24 xs:h-24 sm:top-6 sm:right-6 sm:w-32 sm:h-32' 
          : 'top-4 right-4 w-24 h-24 md:top-6 md:right-6 md:w-36 md:h-36 lg:top-8 lg:right-8 lg:w-48 lg:h-48'
      }`}></div>
      
      <div className={`absolute bg-teal-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl ${
        isMobile 
          ? 'bottom-3 left-3 w-24 h-24 xs:bottom-4 xs:left-4 xs:w-28 xs:h-28 sm:bottom-6 sm:left-6 sm:w-36 sm:h-36' 
          : 'bottom-4 left-4 w-28 h-28 md:bottom-6 md:left-6 md:w-40 md:h-40 lg:bottom-8 lg:left-8 lg:w-56 lg:h-56'
      }`} style={{ animation: 'float 6s ease-in-out infinite' }}></div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .professional-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(20, 184, 166, 0.15);
          box-shadow: 
            0 20px 25px -5px rgba(0, 0, 0, 0.08),
            0 10px 10px -5px rgba(0, 0, 0, 0.04),
            inset 0 1px 0 rgba(255, 255, 255, 0.9);
        }
        .button-hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .button-hover-lift:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 25px -8px rgba(15, 118, 110, 0.3);
        }

        @media (max-width: 480px) {
          .xs\\:p-3 {
            padding: 0.75rem;
          }
          .xs\\:top-4 {
            top: 1rem;
          }
          .xs\\:right-4 {
            right: 1rem;
          }
          .xs\\:w-24 {
            width: 6rem;
          }
          .xs\\:h-24 {
            height: 6rem;
          }
        }
      `}</style>

      <div className="flex flex-col justify-center items-center h-full w-full">
        {/* Main Content Card */}
        <div className={`professional-card rounded-xl sm:rounded-2xl w-full max-w-full mx-auto animate-fade-in-up flex flex-col justify-between ${
          isMobile 
            ? 'p-3 xs:p-4 sm:p-6' 
            : 'p-4 md:p-6 lg:p-8'
        } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
             style={{ 
               maxWidth: '98%', 
               height: 'auto', 
               minHeight: '90%' 
             }}>
          
          {/* Main Content Section - Takes available space */}
          <div className="flex-1 flex flex-col justify-center">
            {/* Profile Avatar */}
            <div className={`relative inline-block mx-auto ${
              isMobile ? 'mb-3 xs:mb-4 sm:mb-5' : 'mb-4 lg:mb-6'
            }`}>
              <div className={`rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white shadow-2xl border-2 border-teal-400/30 ${
                isMobile 
                  ? 'w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 text-base xs:text-lg sm:text-xl' 
                  : 'w-14 h-14 lg:w-20 lg:h-20 text-lg lg:text-2xl'
              }`}>
                👨‍💻
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-teal-400 to-teal-600 opacity-30 blur-md animate-float"></div>
            </div>

            {/* Name */}
            <h1 className={`text-slate-900 tracking-tight font-bold text-center ${
              isMobile 
                ? 'text-xl xs:text-2xl sm:text-3xl mb-2 xs:mb-3' 
                : 'text-2xl lg:text-4xl mb-2 lg:mb-4'
            }`}>
              <span className="bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent">
                Saloni Nanda
              </span>
            </h1>

            {/* Professional divider */}
            <div className={`flex items-center justify-center ${
              isMobile ? 'mb-3 xs:mb-4' : 'mb-2 lg:mb-5'
            }`}>
              <div className={`h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent ${
                isMobile ? 'w-4 xs:w-6 sm:w-8' : 'w-6 md:w-8 lg:w-10'
              }`}></div>
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500 shadow-lg shadow-teal-500/50 mx-2 xs:mx-3"></div>
              <div className={`h-px bg-gradient-to-l from-transparent via-slate-300 to-transparent ${
                isMobile ? 'w-4 xs:w-6 sm:w-8' : 'w-6 md:w-8 lg:w-10'
              }`}></div>
            </div>

            {/* Professional titles */}
            <div className={`space-y-2 text-center ${
              isMobile ? 'xs:space-y-3' : 'space-y-3'
            }`}>
              <p className={`font-light text-slate-700 tracking-wide leading-tight ${
                isMobile ? 'text-sm xs:text-base' : 'text-base lg:text-lg'
              }`}>
                MERN Stack Developer
              </p>
              <p className={`font-light text-slate-700 tracking-wide leading-tight ${
                isMobile ? 'text-sm xs:text-base' : 'text-base lg:text-lg'
              }`}>
                Virtual Reality Designer
              </p>
            </div>
          </div>

          {/* Social Media Links - Pushed to bottom with justify-between */}
          <div className="relative z-10 mt-5">
            <div className={`grid ${
              isMobile ? 'grid-cols-2 gap-2 xs:gap-3' : 'grid-cols-2 gap-2 lg:gap-3'
            } max-w-full`}>
              {contactButtons.map((button, index) => (
                <Link
                  key={index}
                  to={button.href}
                  target={button.href.startsWith('http') ? "_blank" : undefined}
                  rel={button.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`button-hover-lift group relative overflow-hidden rounded-lg text-center transition-all duration-300 bg-gradient-to-br from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 border border-teal-500/30 hover:border-teal-600/50 shadow-md hover:shadow-lg ${
                    isMobile 
                      ? 'px-2 xs:px-3 py-2 xs:py-2' 
                      : 'px-2 lg:px-3 py-1 lg:py-3'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/10 group-hover:to-white/5 transition-all duration-300"></div>

                  <div className="relative z-10 flex flex-col xs:flex-row items-center justify-center gap-1">
                    <div className="text-white group-hover:text-teal-50 transition-colors">
                      {React.cloneElement(button.icon, { 
                        size: getIconSize() 
                      })}
                    </div>
                    <div className={`font-medium text-white group-hover:text-teal-50 transition-colors whitespace-nowrap ${
                      isMobile ? 'text-xs xs:text-sm' : 'text-xs lg:text-sm'
                    }`}>
                      {button.label}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageNavigation onPrev={onPrev} onNext={onNext} page={page} totalPages={totalPages} />
    </div>
  );
});