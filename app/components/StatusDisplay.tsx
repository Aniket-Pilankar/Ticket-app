import React from "react";

type Props = {};

const StatusDisplay = (props: Props) => {
  return (
    <span
      className={`inline-block  rounded-full px-2 py-1 text-xs font-semibold text-gray-700`}
    >
      Done
    </span>
  );
};

export default StatusDisplay;
