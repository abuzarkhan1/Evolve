import React from "react";

interface MagicButtonProps {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  onClick?: () => void;
  otherClasses?: string;
}

const MagicButton: React.FC<MagicButtonProps> = ({
  title,
  icon,
  position = "right",
  onClick,
  otherClasses = "",
}) => {
  return (
    <button
      onClick={onClick}
      className={`relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-50 ${otherClasses}`}
    >
      {/* Animated gradient background */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Button content */}
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 py-2.5 text-sm font-medium text-white backdrop-blur-3xl hover:bg-slate-900 transition-colors duration-200 gap-2 relative ${otherClasses}`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;
