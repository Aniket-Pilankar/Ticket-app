import React from "react";

type Props = {
  progress: number;
};

const ProgressDisplay = ({ progress }: Props) => {
  return (
    <div className="bg-gray-200 w-full rounded-full h-3">
      <div
        className="bg-blue-600 rounded-full h-3"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
