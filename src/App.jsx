import React, { useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { CoverPage1 } from "./pages/CoverPage1";
import { CoverPage2 } from "./pages/CoverPage2";
import { AboutPage } from "./pages/AboutPage";
import { SkillPage } from "./pages/SkillPage";
import { SkillPage2 } from "./pages/SkillPage2";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ProjectsPage } from "./pages/ProjectsPage";
import { EducationPage } from "./pages/EducationPage";
import { CoverPage3 } from "./pages/CoverPage3";

export default function App() {
  const [page, setPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 400, height: 600 });
  const [isMobile, setIsMobile] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [key, setKey] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);
  const bookRef = React.useRef();
  const totalPages = 10;

  useEffect(() => {
    setIsClient(true);
    
    const updateDimensions = () => {
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      
      const mobile = screenWidth < 768;
      setIsMobile(mobile);
      
      let width, height;
      
      if (mobile) {
        if (screenWidth < 640) {
          width = screenWidth - 20;
          height = Math.min(screenHeight - 50, 500);
        } else if (screenWidth < 768) {
          width = screenWidth - 40;
          height = Math.min(screenHeight - 50, 550);
        } else {
          width = Math.min(screenWidth - 60, 500);
          height = Math.min(screenHeight - 50, 600);
        }
      } else {
        const availableWidth = Math.min(screenWidth - 100, 900);
        const availableHeight = Math.min(screenHeight - 50, 700);
        width = Math.min(availableWidth / 2.1, 420);
        height = Math.min(availableHeight, 650);
      }
      
      setDimensions({ width, height });
      setKey(prev => prev + 1);
    };

    updateDimensions();

    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateDimensions, 100);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  const nextPage = () => {
    if (page < totalPages - 1 && !isFlipping) {
      setIsFlipping(true);
      bookRef.current?.pageFlip()?.flipNext();
    }
  };

  const prevPage = () => {
    if (page > 0 && !isFlipping) {
      setIsFlipping(true);
      bookRef.current?.pageFlip()?.flipPrev();
    }
  };

  const goToFirstPage = () => {
    if (page > 0 && !isFlipping) {
      setIsFlipping(true);
      bookRef.current?.pageFlip()?.flip(0);
    }
  };

  const handleFlip = (e) => {
    setPage(e.data);
    setIsFlipping(false);
  };

  const handleFlipStart = () => {
    setIsFlipping(true);
  };

  const handleFlipEnd = () => {
    setIsFlipping(false);
  };

  const usePortrait = isMobile;

  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-2 sm:p-4">
      {/* Flipbook Container */}
      <div className="rounded-lg overflow-visible">
        <HTMLFlipBook
          key={key}
          width={dimensions.width}
          height={dimensions.height}
          size="fixed"
          minWidth={280}
          maxWidth={500}
          minHeight={400}
          maxHeight={900}
          showCover={!isMobile}
          mobileScrollSupport={true}
          ref={bookRef}
          onFlip={handleFlip}
          onFlipStart={handleFlipStart}
          onFlipEnd={handleFlipEnd}
          className="flipbook"
          startPage={0}
          drawShadow={true}
          flippingTime={800}
          usePortrait={usePortrait}
          startZIndex={0}
          autoSize={true}
          maxShadowOpacity={0.5}
          showPageCorners={true}
          disableFlipByClick={true} // Completely disable click to flip
          useMouseEvents={false} // Completely disable mouse events for flipping
          swipeDistance={isMobile ? 30 : 0} // Enable swipe only for mobile
          clickEventForward={true} // Allow clicks to pass through
        >
          <div className="page" style={{ height: '100%' }}>
            <CoverPage1 onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
          <div className="page" style={{ height: '100%' }}>
            <CoverPage2 onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
          <div className="page" style={{ height: '100%' }}>
            <AboutPage onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
          <div className="page" style={{ height: '100%' }}>
            <SkillPage onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
          <div className="page" style={{ height: '100%' }}>
            <SkillPage2 onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
          <div className="page" style={{ height: '100%' }}>
            <ExperiencePage onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
          <div className="page" style={{ height: '100%' }}>
            <ProjectsPage onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
          <div className="page" style={{ height: '100%' }}>
            <EducationPage onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
           <div className="page" style={{ height: '100%' }}>
            <CoverPage2 onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
           <div className="page" style={{ height: '100%' }}>
            <CoverPage3 onNext={nextPage} onPrev={prevPage} onHome={goToFirstPage} page={page} totalPages={totalPages} isFlipping={isFlipping} />
          </div>
        </HTMLFlipBook>
      </div>
    </div>
  );
}