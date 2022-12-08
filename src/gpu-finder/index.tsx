import React, { FC, useState, SyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import gpus from "./gpu.json";
import GpuInfo from "../gpuInfo";

export interface GpuProps {
  year: number;
  model: string;
  price: string;
  index: number;
  "1080p": number;
  "1440p": number;
  "4K": number;
}

type GpuType = GpuProps | null;

const max = Math.max(200, gpus[0]["4K"]);

const GpuFinder: FC = () => {
  const [value, setValue] = useState<GpuType>(null);
  const handleSelect = (
    _event: SyntheticEvent<Element, Event>,
    gpu: GpuType
  ) => {
    setValue(gpu as unknown as GpuProps);
  };

  return (
    <div style={{ width: "60%", minWidth: "300px" }}>
      <Autocomplete
        disablePortal
        id="find-gpu"
        options={gpus}
        getOptionLabel={(option) => option.model}
        sx={{ width: "100%" }}
        renderInput={(params) => <TextField {...params} label="Gpu" />}
        onChange={handleSelect}
      />
      {value && <GpuInfo gpu={value} max={max} />}
    </div>
  );
};

export default GpuFinder;
