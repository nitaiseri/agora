import { Typography,Paper, Button } from "@mui/material";
import Items from "./items/Items";
import AddItemModal from "./items/AddItemModal";
import React, { useState } from 'react';
import {useSelector} from 'react-redux'
import {selectIsManager} from '../app/authSlice'


function AgoraPage() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const isManager = useSelector(selectIsManager);

  return (
    <div>
      <Typography variant="h1" sx={{m:4,fontWeight:"bold",color:"white"}}>PRODUCTS</Typography>
      {isManager &&<Button variant="outlined" onClick={handleOpen}>Add Item</Button>}
      <AddItemModal handleClose={handleClose} open={open}/>
      <Paper elevation={5} sx={{p:5, m:4,backgroundColor:"rgba(255,255,255,0.7)"}}><Items /></Paper>
    </div>
  );
}


export default AgoraPage;