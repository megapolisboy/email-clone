import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import "../styles/Section.css";

interface SectionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  color: string;
  selected?: boolean;
}

const Section: React.FC<SectionProps> = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`section ${selected && "section--selected"}`}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
