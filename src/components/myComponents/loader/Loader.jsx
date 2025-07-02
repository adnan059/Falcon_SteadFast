import { LoaderCircle } from "lucide-react";
import React from "react";

const Loader = () => {
  return (
    <div>
      <LoaderCircle className="animate-spin text-[var(--main-theme)]" />
    </div>
  );
};

export default Loader;
