import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import logo from "../utils/logo.svg";


const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ height:'6vh', background: 'linear-gradient(90deg, rgba(3,12,139,1) 0%, rgba(14,15,189,1) 73%)', top: 0, justifyContent: "space-between"}}>
    <Link to="SoundSwipe/" style={{ display: "flex", marginLeft:15,alignItems: "center", justifyContent:'center', textAlign:'center' }}>
    <img src={logo} alt="logo" height={50} />
    </Link>
    


  </Stack>
);

export default Navbar;