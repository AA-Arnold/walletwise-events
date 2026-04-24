import React from "react";

const FooterCardWrapper = ({
  children,
  className = "bg-[#CD020017] border-[#CD0200]",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={`${className} border rounded-[16px]`}>{children}</div>;
};

export default FooterCardWrapper;
