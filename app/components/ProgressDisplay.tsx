import React from "react";

type Props = {};

const ProgressDisplay = (props: Props) => {
  return (
    <div className="bg-gray-200 w-full rounded-full h-3">
      <div
        className="bg-blue-600 rounded-full h-3"
        style={{ width: "75%" }}
      ></div>
    </div>
  );
};

export default ProgressDisplay;
