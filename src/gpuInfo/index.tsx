import React, { FC } from "react";
import {
  Grid,
  Box,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { GpuProps } from "../gpu-finder";
import { ColorType, getIcon, getPico, getQuest, getQuest2, getRange, getStatusColor } from "./utils";

interface GpuInfoProps {
  gpu: GpuProps;
  max: number;
}

const BorderLinearProgress = styled(LinearProgress)(({ theme, color }) => ({
  height: 10,
  borderRadius: 5,
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette[color as ColorType].main,
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
  margin: 2,
}));

const GpuInfo: FC<GpuInfoProps> = ({ gpu, max }) => {
  const range = getRange(gpu["4K"], gpu.model);
  const statusColor = getStatusColor(range);
  const percentValue = (gpu["4K"] * 100) / (max || 1);
  return (
    <Box
      sx={{
        marginTop: 2,
        backgroundColor: "lightgrey",
      }}
    >
      <div style={{ paddingTop: "1px" }}>
        <Item>
          <List>
            <ListItem>
              <ListItemIcon>{getIcon(range)}</ListItemIcon>
              <ListItemText
                primary={range}
                secondary={gpu.model}
                primaryTypographyProps={{
                  fontSize: 20,
                  fontWeight: "bold",
                  letterSpacing: 0,
                  textTransform: "uppercase",
                }}
              />
            </ListItem>
          </List>
          <BorderLinearProgress
            variant="determinate"
            value={percentValue}
            color={statusColor}
          />
        </Item>
        <Grid container>
          <Grid xs={4} style={{ fontWeight: "bold" }} item>
            <Item>Pico 4</Item>
          </Grid>
          <Grid xs={8} item>
            <Item>{getPico(range)}</Item>
          </Grid>
          <Grid xs={4} style={{ fontWeight: "bold" }} item>
            <Item>Quest 2/Pro</Item>
          </Grid>
          <Grid xs={8} item>
            <Item>{getQuest2(range)}</Item>
          </Grid>
          <Grid xs={4} style={{ fontWeight: "bold" }} item>
            <Item>Quest</Item>
          </Grid>
          <Grid xs={8} item>
            <Item>{getQuest(range)}</Item>
          </Grid>
          <Grid xs={4} style={{ fontWeight: "bold" }} item>
            <Item>Year</Item>
          </Grid>
          <Grid xs={8} item>
            <Item>{gpu.year}</Item>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
};

export default GpuInfo;
