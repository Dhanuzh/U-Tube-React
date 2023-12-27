import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utilities/constant";
import "../index";

const selectCategory = "New";

const SideBar = () => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        style={{
          background: category.name === selectCategory && "#FC1503",
          color: "black",
        }}
        key={category.name}
      >
        <span
          style={{
            color: category.name === selectCategory ? "white" : "black",
            marginRight: "10px",
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            color: category.name === selectCategory ? "white" : "black",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);
export default SideBar;
