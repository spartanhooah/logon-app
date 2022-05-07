import classes from "./Input.module.css";

const Input = (props) => {
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
      />
    </div>
  );
};

export default Input;
