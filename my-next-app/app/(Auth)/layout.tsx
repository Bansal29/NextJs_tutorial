import React from "react";

export default function ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="p-1 border-b text-center">20% off for next few days</div>
      {children}
    </div>
  );
}
