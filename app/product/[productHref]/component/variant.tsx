import { Box, Typography,List,ListItem,ListItemText,Divider } from "@mui/material";
function Variant({ index }: { index: any }) {
  return (
    <Box
      sx={{
        border: "1px solid black",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
        p:2
      }}
    >
      <Typography
        sx={{
          border: "1px solid black",
          borderRadius: "50%",
          p: 2,
          backgroundColor: index?.backgroundColor,
        }}
        variant="h4"
      >
        {index?.index}
      </Typography>
      <Typography sx={{ p: 2 }} variant="h4">
        Variant {index?.index}
      </Typography>
      <Typography sx={{ p: 2 }}>
        Vitae adipiscing turpis. Aenean ligulamolestie id vivide.
      </Typography>
      <List>
              <ListItem disablePadding>
                  <ListItemText primary="10" />
                  
              </ListItem>
              <Divider/>
              <ListItem disablePadding>
                  <ListItemText primary="This is the 2nd item" />
                  
              </ListItem>
              <Divider/>
              <ListItem disablePadding>
                  <ListItemText primary="Sapien proin" />
                  
              </ListItem>
              <Divider/>
              <ListItem disablePadding>
                  <ListItemText primary="Dignissim risus" />
                
              </ListItem>
              <Divider/>
              </List>
    </Box>
  );
}
export default Variant;
