import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../utils/logo.svg";


const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ height:'6vh', background: '#089364', top: 0, justifyContent: "space-between"}}>
    <Link to="SoundSwipe/" style={{ display: "flex", marginLeft:15,alignItems: "center", justifyContent:'center', textAlign:'center' }}>
    <img src={logo} alt="logo" height={50} />
    </Link>
    


  </Stack>
);

export default Navbar;