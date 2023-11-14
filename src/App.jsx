import { useState } from "react";
import "./App.css";
import { Box, Button, Stack, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";

function App() {
  return (
    <>

<Typography variant="subtitle1" textTransform={"uppercase"}> Caractéristique</Typography>
<Typography variant="h1" fontWeight={600}>Plus de puissance pour plus d'efficacité</Typography>
<Stack direction="row" spacing={2} paddingTop={5}>
  <Box sx={{width:"50%", height:450, borderRadius:1, bgcolor:"primary.main"}}></Box>
<Stack width={"50%"} spacing={2}>
  <Box sx={{width:"100%", height:"50%", borderRadius:1, bgcolor:"primary.main"}}></Box>
  <Box sx={{width:"100%", height:"50%", borderRadius:1, bgcolor:"primary.main"}}></Box>
</Stack >
</Stack>





      {/* <div>
        <Button variant="text" color="error" size="small">
          text
        </Button>
        <br />
        <Button variant="outlined" color="secondary" size="large">
          Outlined
        </Button>
        <br />
        <Button variant="contained" color="success" size="medium" startIcon={<SendIcon />}>
          Contained
        </Button>
      </div> */}
    </>
  );
}

export default App;
