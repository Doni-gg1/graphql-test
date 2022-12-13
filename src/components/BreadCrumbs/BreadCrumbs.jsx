import React, { memo } from "react";
import { useLocation } from "react-router-dom";
import { Crumbs } from "../Crumbs/Crumbs";

const BreadcrumbsComponent = () => {
    const location = useLocation();
    const { state } = location;
    if (state) {
      return (
        <nav className="Breadcrumbs">
          {state.map(crumb => (
            <Crumbs {...crumb} key={crumb.url} />
          ))}
        </nav>
      );
    }
    return null;
  };
  
  export const Breadcrumbs = memo(BreadcrumbsComponent);