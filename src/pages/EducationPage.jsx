import React, { useState, useEffect } from "react";
import { PageNavigation } from "../components/PageNavigation";

export const EducationPage = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
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

  const education = [
    {
      degree: "B. Tech (Computer Science & Engineering)",
      institution: "Nalanda Institute of Technology, Bhubaneswar",
      details: "9.18 CGPA",
      duration: "2021-2025",
      color: "from-blue-700 to-blue-600"
    },
    {
      degree: "12th CHSE-PCMB",
      institution: "GyanBharati Institute of Sc. And Tech., Bhubaneswar",
      details: "87.33%",
      duration: "2021",
      color: "from-emerald-700 to-emerald-600"
    },
    {
      degree: "10th BSE",
      institution: "Mahabir Bidyapitha, Mahanga, Cuttack",
      details: "88.33%",
      duration: "2019",
      color: "from-purple-700 to-purple-600"
    }
  ];

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white p-2 xs:p-3 sm:p-4 md:p-6 relative overflow-hidden border-2 border-teal-200"
    >
      {/* Background layers - consistent with Experience page */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:25px_25px] xs:bg-[size:30px_30px] sm:bg-[size:35px_35px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent"></div>

      {/* Floating effects - consistent styling */}
      <div className={`absolute bg-blue-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${
        isMobile 
          ? 'top-6 right-6 w-32 h-32 xs:top-8 xs:right-8 xs:w-40 xs:h-40 sm:top-12 sm:right-12 sm:w-48 sm:h-48' 
          : 'top-8 right-8 w-40 h-40 md:top-12 md:right-12 md:w-56 md:h-56 lg:top-16 lg:right-16 lg:w-72 lg:h-72'
      }`}></div>
      
      <div className={`absolute bg-cyan-900/5 rounded-full blur-xl sm:blur-2xl md:blur-3xl animate-float ${
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
        .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-slide-in-left { animation: slideInLeft 0.8s ease-out forwards; }
        .professional-card {
          backdrop-filter: blur(20px);
          background: rgba(255, 255, 255, 0.85);
          border: 1px solid rgba(20, 184, 166, 0.15);
          box-shadow:
            0 20px 25px -5px rgba(0, 0, 0, 0.08),
            0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }
        .education-timeline {
          position: relative;
        }
        .education-timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, #0369a1, #0891b2);
          border-radius: 2px;
        }
        .timeline-item {
          position: relative;
          padding-left: 2rem;
        }
        .timeline-item::before {
          content: '';
          position: absolute;
          left: -5px;
          top: 0.5rem;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0369a1, #0891b2);
          border: 2px solid white;
          box-shadow: 0 0 0 3px rgba(3, 105, 161, 0.2);
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
              ? 'p-2 xs:p-2 sm:p-2' 
              : 'p-2 lg:p-2'
          }`}
          style={{ 
            maxWidth: '98%', 
            height: 'auto', 
            minHeight: '90%' 
          }}
        >
          {/* Heading */}
          <h2 className={`font-bold text-slate-900 mb-2 text-center ${
            isMobile 
              ? 'text-xl xs:text-2xl sm:text-3xl' 
              : 'text-2xl lg:text-4xl'
          }`}>
            <span className="bg-gradient-to-r from-teal-700 to-teal-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          {/* Education Timeline */}
          <div className="education-timeline">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="timeline-item mb-2 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {/* Degree and Institution */}
                <div className="mb-2">
                  <h3 className={`font-bold text-slate-900 text-sm lg:text-md`}>
                    <span className={`bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}>
                      {edu.degree}
                    </span>
                  </h3>
                  <p className={`font-semibold text-slate-700 mt-1 text-xs lg:text-sm`}>
                    {edu.institution}
                  </p>
                  <div className="flex justify-between items-center">
                  {edu.details && (
                    <p className={`text-slate-600 font-medium mt-1 text-xs lg:text-sm`}>
                      {edu.details}
                    </p>
                  )}
                  <p className={`text-slate-500 font-medium mt-1 text-xs lg:text-sm`}>
                    {edu.duration}
                  </p>
                  </div>
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