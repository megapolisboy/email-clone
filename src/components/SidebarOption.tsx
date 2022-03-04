import { SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import React from "react";
import "../styles/SidebarOption.css";

interface SidebarOptionProps {
  Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
  title: string;
  number: number;
  selected?: boolean;
}

const SidebarOption: React.FC<SidebarOptionProps> = ({
  Icon,
  title,
  number,
  selected,
}) => {
  return (
    <div className={`sidebarOption ${selected && "sidebarOption--active"}`}>
      <Icon />
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );
};

export default SidebarOption;
