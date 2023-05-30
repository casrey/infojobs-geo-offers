import { SelectBox, SelectBoxItem, Text } from "@tremor/react";

const DropdownFilter = ({
  field,
  options,
  advancedFilters,
  setAdvancedFilters,
}) => {
  return (
    <>
      <Text>Localización</Text>
      <SelectBox
        className="mt-2"
        onValueChange={(value) => {
          setAdvancedFilters((prev) => ({ ...prev, [field]: value }));
        }}
        placeholder="Selecciona tu país"
      >
        {options.map(({ name, code, flag }) => (
          <SelectBoxItem
            key={code}
            value={name}
            text={`${field === "country" ? flag : ""} ${name}`}
          />
        ))}
      </SelectBox>
    </>
  );
};

export default DropdownFilter;
