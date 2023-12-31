import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import SearchBar from "./SearchBar";
import { logo } from "../utilities/constant";

const NavBar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      background: "#000",
      position: "sticky",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>
);
export default NavBar;
