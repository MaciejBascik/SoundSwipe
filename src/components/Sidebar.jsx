import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/categories"

const SideBar = ({ selectedCategory, setSelectedCategory, setSelectedPlaylist }) => {

  return (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
      backgroundColor:'#089364',
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {setSelectedCategory(category.name); setSelectedPlaylist(category.id)}}
        style={{
          background: category.name === selectedCategory && "#089364",
          color: "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "green", marginRight: "10px" }}>
          {category.icon}
        </span>
        <span style={{ opacity: category.name === selectedCategory ? "1" : "0.8" }}>
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
)
}
export default SideBar;