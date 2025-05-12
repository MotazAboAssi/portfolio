import React from "react";
import "./CircularProgress.css";

const CircularProgress = ({ percentage, titleCaption = "Progress" }) => {
  const radius = 50;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const progress = (percentage / 100) * circumference;

  return (
    <div className="progress-container">
      <svg
        width="75%"
        height="75%"
        viewBox="0 0 120 120"
        className="circular-progress text-white"
      >
        {/* Define Gradient */}
        <defs>
          <linearGradient
            id="progressGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#065c72" />
            <stop offset="100%" stopColor="#0d0d5c" /> 
          </linearGradient>
        </defs>

        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          // stroke="#333333"
          strokeWidth={strokeWidth}
          fill="none"
        />

        {/* Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="url(#progressGradient)"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          strokeLinecap="round"
          className="progress-circle "
        />

        {/* Percentage Text */}
        <text
          x="51%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="20px"
          className="fw-bolder"
          id="percentage"
          fill="white"
        >
          {percentage}%
        </text>
      </svg>

      {/* Title Caption */}
      <p className="progress-title fw-bolder text-white text-capitalize ">
        {titleCaption}
      </p>
    </div>
  );
};

export default CircularProgress;
