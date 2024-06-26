import React, { FC, useState, SyntheticEvent } from "react";
import { Autocomplete, TextField } from "@mui/material";
import gpuList from "./gpu.json";
import GpuInfo from "../gpuInfo-gflops";

const gpus = gpuList.map((el, index) => ({
  ...el,
  index: gpuList.length - index,
  model: el.gpu,
  gflops: parseInt(el.GFLOPS.replace(/,/g, "")),
}))

export interface GpuProps {
  date: string;
  gpu: string;
  price: string;
  index: number;
  model: string;
  architecture: string;
  shaders: number;
  clockspeed: number;
  gflops: number;
}

type GpuType = GpuProps | null;

const max = gpus[0].gflops;

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
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.index}>
              {option.model}
            </li>
          );
        }}
        onChange={handleSelect}
      />
      {value && <GpuInfo gpu={value} max={max} />}
    </div>
  );
};

export default GpuFinder;
