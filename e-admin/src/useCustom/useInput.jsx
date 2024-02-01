import React from "react";

function UseInput(props) {
  const { type, label, id, name, value, onChange, onBlur } = props;

  return (
    <>
     

      
        <div class="form-group">
        
          <input
            type={type}
            class="form-control "
            id={id}
            name={name}
            placeholder={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            autoComplete="off"
          />
        </div>
    
    </>
  );
}

export default UseInput;
