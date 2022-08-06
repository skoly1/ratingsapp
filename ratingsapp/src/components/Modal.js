import Close from "@mui/icons-material/Close";
import { Dialog, DialogTitle, IconButton } from "@mui/material";



export const Modal = () => {

    const HandleClose = () => {}
  return (
    <div className="modal">
        <Dialog >
            <DialogTitle>
            <IconButton
          aria-label="Close"
          onClick={HandleClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            // color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
            </DialogTitle>
        </Dialog>
    </div>
  )
}
