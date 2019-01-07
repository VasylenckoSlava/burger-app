import React from "react";

import classes from "./Modal.css";
<<<<<<< HEAD
import Aux from "../../../hoc/Aux";
import Backdrop from "../Backdrop/Backdrop";

const modal = props => {
  return (
    <Aux>
=======
import Backdrop from "../Backdrop/Backdrop";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const modal = props => {
  return (
    <Auxiliary>
>>>>>>> Added configuration for windows
      <Backdrop show={props.show} clicked={props.modalClose} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        {props.children}
      </div>
<<<<<<< HEAD
    </Aux>
=======
    </Auxiliary>
>>>>>>> Added configuration for windows
  );
};

export default modal;
