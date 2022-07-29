import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import "./MessageModelCss.css"

const style = {
  bgcolor: 'background.paper',
  p: 4,
  borderRadius: "6px",
};

const iconStyle = {
  "position": "relative",
  "left": "20px",
  "float": "right",
  "top": "-17px",
  "cursor": "pointer",
}

export default function BasicModal(props) {
  //  get Props from Product.js which model is open or close

  const { modelMessage, open, setOpen } = props
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {
          // if model messsage is Success show success model message
          (modelMessage === "success") ? <Box sx={style} className='modelBox'>
            <CloseIcon sx={iconStyle} onClick={() => {
              handleClose()
            }}
            />
            <Box style={{ "display": "flex", "justifyContent": "center" }}>
              <CheckCircleIcon sx={{ color: "#5dcc1a", fontSize: "100px" }} />
            </Box>
            <Typography id="modal-modal-title" variant="h$" component="h2">
              Purchsed Successfull
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
              You Will Get Your Product Soon!
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2, textAlign: 'center' }}>
              Get ready to experience the spatial audio with<br />
              Adaptive EQ that tunes music to your ear.
            </Typography>
          </Box> : <Box sx={style} className='modelBox'>
            {/* if cancel model payment is introduce so this model is appear */}
          </Box>
        }

      </Modal>
    </div>
  );
}
