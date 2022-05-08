import React, { useRef, useImperativeHandle } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => {
    return {
      focus: activate,
    };
  });

  return (
    <div
      className={`${classes.control} ${
        props.inputState.isValid === false ? classes.invalid : ""
      }`}
    >
      <label htmlFor={props.type}>{props.label}</label>
      <input
        type={props.type}
        id={props.type}
        value={props.inputState.value}
        onChange={props.onChangeHandler}
        onBlur={props.validationHandler}
        ref={inputRef}
      />
    </div>
  );
});

export default Input;
