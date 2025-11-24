// ContactPage.jsx
import React from "react";
import { PageNavigation } from "../components/PageNavigation";

export const ContactPage = React.forwardRef(({ onNext, onPrev, page, totalPages }, ref) => {
  return (
    <div
      ref={ref}
      className="h-full w-full flex flex-col justify-center items-center bg-indigo-50 text-gray-800 p-8"
    >
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="text-base">📧 saloni@example.com</p>
      <p className="text-base">🔗 linkedin.com/in/saloni</p>
      <PageNavigation onPrev={onPrev} onNext={onNext} page={page} totalPages={totalPages} />
    </div>
  );
});
