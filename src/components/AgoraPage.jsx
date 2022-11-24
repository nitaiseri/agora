import { Typography,Paper } from "@mui/material";
import Items from "./items/Items";

function AgoraPage() {

  return (
    <div>
      <Typography variant="h3" sx={{m:4}}>PRODUCTS</Typography>
      <Paper elevation={5} sx={{p:5, m:4}}><Items /></Paper>
    </div>
  );
}


export default AgoraPage;