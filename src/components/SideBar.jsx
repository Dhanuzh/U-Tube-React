import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utilities/constant";
import "../index";

const SideBar = ({ selectCategory, setSelectCategory }) => (
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
        key={category.name}
        onClick={() => setSelectCategory(category.name)}
        style={{
          background: category.name === selectCategory && "#FC1503",
          color: "black",
        }}
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
