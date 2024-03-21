"use client";
import ReactSelect from "react-select";
const Select = ({
  disabled,
  label,
  options,
  onChange,
  value,
}: {
  disabled?: boolean;
  label: string;
  options: Record<string, any>[];
  onChange: (value: Record<string, any>) => void;
  value?: Record<string, any>;
}) => {
  return (
    <div className="z-[100]">
      {/* <label className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label> */}
      <div className="mt-2" style={{width:"100%"}}>
        <ReactSelect
          isDisabled={disabled}
          value={value}
          onChange={onChange}
          isMulti
          options={options}
          menuPortalTarget={document.body}
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
      </div>
    </div>
  );
};
export default Select;