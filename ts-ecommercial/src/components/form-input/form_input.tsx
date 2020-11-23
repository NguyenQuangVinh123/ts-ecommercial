import React, { FC } from "react";
import "./form-input.styles.scss";
interface FormInputProps {
  label?: string;
  handleChange: any;
  otherProps : any; 
  
}
const FormInput: FC<FormInputProps> = (props) => {
  const { label, handleChange, ...otherProps } = props;
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {label ? (
        <label
          className={`${otherProps.value.length ? "shrink" : ""} 
            form-input-label `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
