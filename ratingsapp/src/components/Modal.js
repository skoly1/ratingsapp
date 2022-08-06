import Close from "@mui/icons-material/Close";
import { Dialog, DialogTitle, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { modifyModal } from "../Redux/slices/Reviews";



export const Modal = () => {
   const modal = useSelector((state)=>state.reviews.modal)
   const dispatch = useDispatch()
   console.log(modal)
    const HandleClose = () => {
        dispatch(modifyModal({isOpen: false}))
    }
  return (
    <div className="modal">
        <Dialog open={modal.isOpen}  onClose={HandleClose}>
            <DialogTitle>
                <h3>{modal.title}</h3>
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
            <h1>test</h1>
        </Dialog>
    </div>
  )
}
