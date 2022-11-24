import { Typography,Paper, Button } from "@mui/material";
import Items from "./items/Items";
import AddItemModal from "./items/AddItemModal";
import React, { useState } from 'react';



function AgoraPage() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Typography variant="h3" sx={{m:4}}>PRODUCTS</Typography>
      <Button variant="outlined" onClick={handleOpen}>Add Item</Button>
      <AddItemModal handleClose={handleClose} open={open}/>
      <Paper elevation={5} sx={{p:5, m:4}}><Items /></Paper>
    </div>
  );
}


export default AgoraPage;