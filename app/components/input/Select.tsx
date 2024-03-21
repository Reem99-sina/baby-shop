"use client";
import ReactSelect from "react-select";
import {Box} from "@mui/material"
const Select:React.FC<{
  disabled?: boolean;
  label: string;
  options: Record<string, any>[];
  onChange: (value: Record<string, any>) => void;
  value?: Record<string, any>;
}> = ({
  disabled,
  label,
  options,
  onChange,
  value,
}) => {
  return (<Box  sx={{width:"100%"}}>
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          // menuPortalTarget={typeof window!=="undefined"?.document?.body:undefined}
          styles={{
            menuPortal: (base) => ({
              ...base,
              zIndex: 9999,
            }),
            control: (base, state) => ({
              ...base,
              background: "#48484840",})
          }}
          classNames={{
            control: () => "text-sm"
          }}
        />
      </Box>
  );
};
export default Select;
