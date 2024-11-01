import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import CopyButtonGroup from "./copy-button-group.tsx";
import DownloadButtonGroup from "./download-button-group.tsx";

type ToolbarProps = {
  selectedStyle: string;
  setSelectedStyle: React.Dispatch<React.SetStateAction<string>>;
  markdownStyles: { name: string }[];
};

const Toolbar: React.FC<ToolbarProps> = ({
  selectedStyle,
  setSelectedStyle,
  markdownStyles,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
      <Select
        label="Select style"
        disallowEmptySelection={true}
        selectedKeys={[selectedStyle]}
        onChange={(e) => setSelectedStyle(e.target.value)}
      >
        {markdownStyles.map((style) => (
          <SelectItem key={style.name} value={style.name}>
            {style.name}
          </SelectItem>
        ))}
      </Select>
      <div className="hidden md:flex flex-row gap-4 items-center">
        <CopyButtonGroup />
        <DownloadButtonGroup />
      </div>
      <div className="md:hidden w-full flex flex-row gap-4 items-center">
        <CopyButtonGroup fullWidth />
        <DownloadButtonGroup fullWidth />
      </div>
    </div>
  );
};

export default Toolbar;
