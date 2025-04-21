// src/components/ui/card.jsx
import React from "react";
import classNames from "classnames";

function Card({ children, className }) {
  return (
    <div className={classNames("bg-white rounded-lg border", className)}>
      {children}
    </div>
  );
}

function CardContent({ children, className }) {
  return <div className={classNames("p-4", className)}>{children}</div>;
}

export { Card, CardContent };
