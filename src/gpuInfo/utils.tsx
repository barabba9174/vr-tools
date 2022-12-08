import React, { ReactNode } from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import ErrorRoundedIcon from "@mui/icons-material/ErrorRounded";

const notVRAvailable = ["GTX 1060 3GB"];
type FontSizeType = "inherit" | "large" | "medium" | "small";

type RangeType =
  | "godlike"
  | "ultra"
  | "high"
  | "medium"
  | "low"
  | "potato"
  | "no vr-ready";

export const getRange = (x: number, model: string): RangeType => {
  switch (true) {
    case notVRAvailable.indexOf("model") !== -1:
      return "no vr-ready";
    case x > 150:
      return "godlike";
    case x > 100 && x <= 150:
      return "ultra";
    case x > 69 && x <= 100:
      return "high";
    case x > 50 && x <= 69:
      return "medium";
    case x > 32 && x <= 50:
      return "low";
    case x > 27 && x <= 32:
      return "potato";
    default:
      return "no vr-ready";
  }
};

export const getPico = (range: RangeType): string => {
  switch (range) {
    case "godlike":
      return "3120x3120";
    case "ultra":
      return "2736x2736";
    case "high":
      return "2544x2544";
    case "medium":
      return "2064x2064";
    case "low":
      return "1776x1776";
    case "potato":
      return "1488x1488";
    default:
      return "-";
  }
};

export const getQuest2 = (range: RangeType): string => {
  switch (range) {
    case "godlike":
      return "3072x3216 (Only Quest Pro)";
    case "ultra":
      return "2688x2784";
    case "high":
      return "2496x2592";
    case "medium":
      return "2016x2112";
    case "low":
      return "1728x1824";
    case "potato":
      return "1440x1536";
    default:
      return "-";
  }
};

export const getQuest = (range: RangeType): string => {
  switch (range) {
    case "godlike":
    case "ultra":
    case "high":
      return "2208x2400";
    case "medium":
      return "1824x2016";
    case "low":
      return "1536x1728";
    case "potato":
      return "1200x1344";
    default:
      return "-";
  }
};

export type ColorType =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "success"
  | "warning";

export interface IconStatusProps {
  fontSize: FontSizeType;
  color: ColorType;
}

export const getStatusColor = (range: RangeType): ColorType => {
  switch (range) {
    case "godlike":
      return "success";
    case "ultra":
      return "success";
    case "high":
      return "success";
    case "medium":
      return "success";
    case "low":
      return "warning";
    case "potato":
      return "warning";
    default:
      return "error";
  }
};

export const getIcon = (range: RangeType): ReactNode => {
  const props = {
    color: getStatusColor(range),
    fontSize: "large",
  } as IconStatusProps;
  switch (range) {
    case "godlike":
      return <CheckCircleRoundedIcon {...props} />;
    case "ultra":
      return <CheckCircleRoundedIcon {...props} />;
    case "high":
      return <CheckCircleRoundedIcon {...props} />;
    case "medium":
      return <CheckCircleRoundedIcon {...props} />;
    case "low":
      return <WarningRoundedIcon {...props} />;
    case "potato":
      return <WarningRoundedIcon {...props} />;
    default:
      return <ErrorRoundedIcon {...props} />;
  }
};
