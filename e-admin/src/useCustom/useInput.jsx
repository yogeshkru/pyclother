import React from "react";

function UseInput(props) {
  const { type, label, id, name, value, onChange, onBlur } = props;

  return (
    <>
      <div class="form-floating mb-3">
        <input
         
          className="form-control"
          id={id}
          type={type}
          name={name}
          placeholder={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
        />
        <label for="floatingInput">{label}</label>
      </div>
    </>
  );
}

export default UseInput;