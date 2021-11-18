import React from "react";

const MarkerInfo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div
      className="markerContent"
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "10px",
        background: "orange",
      }}
    ></div>
  );
};

export default MarkerInfo;
