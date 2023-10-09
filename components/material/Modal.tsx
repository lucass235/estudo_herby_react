import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Product } from "@/types/Products";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function KeepMountedModal(props: Product) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Comprar</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            color="primary"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            Deseja comprar o {props.name}?
          </Typography>
          <img src={props.image} alt="imagem" />
          <Typography
            color="primary"
            id="keep-mounted-modal-description"
            sx={{ mt: 2 }}
          >
            Preço: R${props.price}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
