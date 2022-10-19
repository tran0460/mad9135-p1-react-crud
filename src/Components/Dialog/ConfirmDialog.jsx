import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const ConfirmDialog = (props) => {
  const { toggle, onCancel, onConfirm, itemName } = props;
  return (
    <Dialog
      open={toggle}
      onClose={onCancel}
      aria-labelledby="responsive-dialog-title">
      <DialogTitle id="responsive-dialog-title">
        {`Delete ${itemName}?`}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          You are about to delete a game from the library, this action cannot be
          undone.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button autoFocus onClick={onCancel}>
          Cancel
        </Button>
        <Button color="error" onClick={onConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
