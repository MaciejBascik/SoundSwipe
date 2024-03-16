import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../utils/logo.svg";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position:  "sticky", background: '#412E8E', top: 0, justifyContent: "space-between"}}>
    <Link to="/" style={{ display: "flex", alignItems: "center", justifyContent:'center', textAlign:'center' }}>
    <img src={logo} alt="logo" height={60} />
    </Link>



  </Stack>
);

export default Navbar;