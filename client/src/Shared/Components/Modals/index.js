import { Modal as MuiModal, Backdrop, Fade } from '@material-ui/core'

const Modal = ({content, open, onClose, timeout=500, others}) => {
    return (
        <MuiModal
            open={open}
            onClose={onClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: timeout
            }}
            {...others}
        >
            <Fade in={open}>
                {content()}
            </Fade>
        </MuiModal>
    )
}

export default Modal;
