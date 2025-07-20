import React from "react";
import { ReactNode } from "react";

export function Modal({ children }: { children: ReactNode }) {
  return (
    <div className="modal">
      <div className="modal-box">{children}</div>
    </div>
  );
}
