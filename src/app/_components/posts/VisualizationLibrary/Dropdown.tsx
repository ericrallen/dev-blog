import { useState } from "react";

export interface DropdownOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface DropdownProps {
  options: Array<DropdownOption>;
  label: string;
  onChange: (option: string) => void;
  id?: string;
  value?: string;
  disabled?: boolean;
  className?: string;
}

export default function Dropdown({
  options,
  className = "",
  onChange,
  value,
  label,
  disabled,
  id,
}: DropdownProps) {
  const [selectedValue, setSelectedValue] = useState<string>(value || "");

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
    onChange(event.target.value);
  };

  const renderOptions = options.map((option) => (
    <option key={option.value} value={option.value} disabled={option.disabled}>
      {option.label}
    </option>
  ));

  return (
    <select
      id={id}
      className={`text-md bg-transparent border border-neutral-600 rounded-sm px-2 py-1 text-neutral-600 hover:text-neutral-100 hover:border-neutral-100 disabled:hover:text-neutral-600 disabled:hover:border-neutral-600 disabled:opacity-50 transition-all duration-300 ease-in-out cursor-pointer ${className}`}
      onChange={handleChange}
      value={selectedValue}
      disabled={disabled}
      aria-label={label}
    >
      {renderOptions}
    </select>
  );
}
