import React from "react";
import styles from "../styles/Home.module.css";
import { Box, Button, Grid, Paper, Snackbar, TextField } from "@mui/material";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

export default function login() {
  const router = useRouter();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <main className={`${styles.main} `}>
      <Grid
        container
        spacing={10}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "550px" }}
      >
        <Paper elevation={10}>
          <Box p={2}>
            <TextField
              fullWidth
              placeholder="Email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
            <TextField
              fullWidth
              placeholder="Password"
              id="filled-basic"
              label="Password"
              variant="outlined"
            />
            <Button
              fullWidth
              color="success"
              variant="contained"
              onClick={() => {
                router.back();
                handleClick();
              }}
            >
              {" "}
              Confirma
            </Button>
            <Grid item xs={8}></Grid>
          </Box>
          <Snackbar
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            message="Note archived"
          />
        </Paper>
      </Grid>
    </main>
  );
}
