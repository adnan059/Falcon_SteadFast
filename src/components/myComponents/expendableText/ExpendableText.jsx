import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

const ExpandableText = ({ text, collapsedHeight = 150 }) => {
  const [expanded, setExpanded] = useState(false);

  return text?.length < 500 ? (
    <div>{text}</div>
  ) : (
    <div className="relative">
      {/* Text container */}
      <div
        className="overflow-hidden transition-all duration-300"
        style={{
          maxHeight: expanded ? "none" : `${collapsedHeight}px`,
        }}
      >
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {text}
        </p>
      </div>

      {/* Expanded gradient */}
      {!expanded && (
        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-white via-white/90 to-white/0 pointer-events-none" />
      )}

      {/* Toggle button */}
      <div className="mt-3 text-center">
        <button
          onClick={() => setExpanded((prev) => !prev)}
          className="font-semibold hover:underline relative z-10 "
        >
          {expanded ? (
            <span className="flex justify-center items-center">
              See Less <ChevronUp />{" "}
            </span>
          ) : (
            <span className="flex justify-center items-center">
              See More <ChevronDown />
            </span>
          )}
        </button>
      </div>
    </div>
  );
};

export default ExpandableText;
