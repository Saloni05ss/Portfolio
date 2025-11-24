import React, { useState, useEffect } from "react";
import { PageNavigation } from "./PageNavigation";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export const CoverPage2 = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

 

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white p-8 relative overflow-hidden border-2 border-teal-200 "
    >
      {/* Sophisticated dark grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 via-transparent to-transparent"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-slate-900/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-900/5 rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>

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
      `}</style>

      

      <PageNavigation onPrev={onPrev} onNext={onNext} page={page} totalPages={totalPages} />
    </div>
  );
});