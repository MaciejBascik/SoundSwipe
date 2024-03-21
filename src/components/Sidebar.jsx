import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/categories"

const SideBar = ({ selectedCategory, setSelectedCategory, setSelectedPlaylist }) => {

  return (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "100%" },
      flexDirection: { md: "column", },
      background: '#FFFFFF',
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => {setSelectedCategory(category.name); setSelectedPlaylist(category.id)}}
        style={{
          background: category.name === selectedCategory && "linear-gradient(90deg, rgb(80, 88, 199) 0%, rgb(40, 40, 211) 73%)",
          color: category.name === selectedCategory && "white",
        }}
        key={category.name}
      >
        <span style={{ color: category.name === selectedCategory ? "white" : "black", marginRight: "10px" }}>
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