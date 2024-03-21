"use client";
import { TextField,Box } from "@mui/material";
 
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
interface InputProps {
  label?: string;
  id: string;
  type?: string;
  required?: boolean;
  register?: UseFormRegister<FieldValues>;
  errors?: FieldErrors;
  disabled?: boolean;
  [x: string]: any;
}
const InputCustom: React.FC<InputProps> = ({
  label,
  id,
  type,
  required=false,
  register,
  errors,
  disabled,
  ...x
}) => {
  
  return (
    <div>
      <label
        htmlFor="id"
        className="block text-sm font-medium loading-6 text-gray-600"
      >
        {label}
      </label>
      <Box sx={{width:"100% !important"}}>
       {typeof register=="function"? <TextField
          id={id}
          type={type}
          autoComplete={id}
          disabled={disabled}
          placeholder={label}
          sx={{".MuiFormControl-root.MuiTextField-root":{width:"100% !important"}}}
          {...register(id,{required})}
          {...x}
        />:<TextField
        id={id}
        type={type}
        autoComplete={id}
        disabled={disabled}
        placeholder={label}
        sx={{".MuiFormControl-root.MuiTextField-root":{width:"100% !important"}}}
        {...x}
      />}
      </Box>
    </div>
  );
};

export default InputCustom;
