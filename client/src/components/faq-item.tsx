import React from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group rounded-lg bg-slate-50 p-6 border border-slate-200 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-slate-900">
        <h3 className="text-lg font-bold">{question}</h3>
        <span className="relative h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-0 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9" />
          </svg>
        </span>
      </summary>
      <div className="mt-4 leading-relaxed text-slate-700" dangerouslySetInnerHTML={{ __html: answer }} />
    </details>
  );
}