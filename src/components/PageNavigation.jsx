import { ArrowLeft, ArrowRight } from "lucide-react";

export const PageNavigation = ({ onPrev, onNext, page, totalPages, isFlipping }) => (
  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
    {page > 0 ? (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        disabled={isFlipping}
        className={`p-1 bg-teal-500 text-white rounded-full shadow-md 
                   transition duration-200 flex items-center justify-center pointer-events-auto
                   ${isFlipping 
                     ? "opacity-50 cursor-not-allowed" 
                     : "hover:bg-teal-600 active:bg-teal-700"}`}
      >
        <ArrowLeft size={12} />
      </button>
    ) : (
      <div />
    )}

    {page < totalPages - 1 ? (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        disabled={isFlipping}
        className={`p-1 bg-teal-500 text-white rounded-full shadow-md 
                   transition duration-200 flex items-center justify-center pointer-events-auto
                   ${isFlipping 
                     ? "opacity-50 cursor-not-allowed" 
                     : "hover:bg-teal-600 active:bg-teal-700"}`}
      >
        <ArrowRight size={12} />
      </button>
    ) : (
      <div />
    )}
  </div>
);