import React from "react";

const Dialog = (props) => {
  const { toggle, onCancel, onConfirm } = props;
  return (
    <dialog open={toggle}>
      <div></div>
      <div>
        <button onClick={onCancel}>Cancel</button>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </dialog>
  );
};

export default Dialog;
