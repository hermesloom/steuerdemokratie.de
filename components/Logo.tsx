import React from "react";

export function Logo({ size = 40 }: { size?: number }) {
  return (
    <div
      className="relative"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    >
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />

        {/* Horizontal dividing line representing equal distribution */}
        <path
          d="M5 50 L95 50"
          stroke="currentColor"
          strokeWidth="2"
          className="text-primary"
        />

        {/* Inner circle representing shared resources */}
        <circle
          cx="50"
          cy="50"
          r="15"
          fill="currentColor"
          className="text-primary"
        />
      </svg>

      {/* Hover effect */}
      <div
        className="absolute inset-0 rounded-full border-2 border-primary opacity-0 hover:opacity-100 transition-opacity"
        style={{ borderRadius: "50%" }}
      ></div>
    </div>
  );
}
