import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";
import { useLocation } from "react-router-dom";

const formatSegment = (segment) => {
  if (!segment) return "";
  return segment
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

const BreadcrumbHeader = () => {
  const location = useLocation();
  const segments = location.pathname.split("/").filter(Boolean);

  const fullSegments = ["home", ...segments];

  return (
    <div className="max-w-[1280px] mx-auto py-3 px-8">
      <Breadcrumb>
        <BreadcrumbList>
          {fullSegments.map((segment, index) => (
            <React.Fragment key={segment + "-wrapper"}>
              <BreadcrumbItem key={segment + "-item"}>
                <span
                  style={{ fontSize: "var(--fs-c)" }}
                  className="capitalize"
                >
                  {formatSegment(segment)}
                </span>
              </BreadcrumbItem>
              {index < fullSegments.length - 1 && (
                <BreadcrumbSeparator key={segment + "-separator"} />
              )}
            </React.Fragment>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbHeader;

// className="max-w-[1280px] mx-auto py-3 px-8"
