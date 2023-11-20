import React from 'react';

export default function NewEventButton({ handleCloseNewEvent }) {
  return (
    <div className="fixed z-[999] right-16 bottom-16">
      <button
        className="bg-orange-400 hover:bg-orange-500 text-blue-900 font-bold py-2 px-2 rounded-full w-20 h-20 flex items-center justify-center"
        onClick={handleCloseNewEvent}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
        </svg>
      </button>
    </div>
  );
}
