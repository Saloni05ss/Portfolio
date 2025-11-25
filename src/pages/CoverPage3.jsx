import React, { useState, useEffect } from "react";
import { PageNavigation } from "../components/PageNavigation";

export const CoverPage3 = React.forwardRef(({ onNext, onPrev, onHome, page, totalPages }, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div
      ref={ref}
      className="h-full w-full bg-white p-8 relative overflow-hidden border-2 border-teal-200"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-50 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-50 via-transparent to-transparent"></div>

      {/* Floating orbs */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-slate-900/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-teal-900/5 rounded-full blur-3xl" style={{ animation: 'float 6s ease-in-out infinite' }}></div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>


      <PageNavigation onPrev={onPrev} onNext={onNext} onHome={onHome} page={page} totalPages={totalPages} />
    </div>
  );
});