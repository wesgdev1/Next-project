import React, { Children, FC, PropsWithChildren } from "react";

export const DarkLayaout:FC<PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(255,255,255,0.3)",
        borderRadius: "5px",
        padding: "300px",
      }}
    >
      <h3>Dark-layaout</h3>
      {children}
    </div>
  );
};
