import { ArrowLeft, ArrowRight, Home } from "lucide-react";

export const PageNavigation = ({ onPrev, onNext, onHome, page, totalPages, isFlipping }) => (
  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center pointer-events-none">
    <div className="flex gap-2">
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

      {page > 0 && onHome ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onHome();
          }}
          disabled={isFlipping}
          className={`p-1 bg-teal-500 text-white rounded-full shadow-md 
                     transition duration-200 flex items-center justify-center pointer-events-auto
                     ${isFlipping 
                       ? "opacity-50 cursor-not-allowed" 
                       : "hover:bg-teal-600 active:bg-teal-700"}`}
          title="Go to first page"
        >
          <Home size={12} />
        </button>
      ) : null}
    </div>

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