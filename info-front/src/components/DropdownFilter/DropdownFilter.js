import { SelectBox, SelectBoxItem, Text } from "@tremor/react";

const DropdownFilter = ({
  field,
  options,
  advancedFilters,
  setAdvancedFilters,
  title,
  inputPlaceholder,
}) => {
  return (
    <>
      <Text>{title}</Text>
      <SelectBox
        className="mt-2"
        onValueChange={(value) => {
          setAdvancedFilters((prev) => ({ ...prev, [field]: value }));
        }}
        defaultValue={null}
        placeholder={inputPlaceholder}
      >
        {options.map(({ id, key, value }) => (
          <SelectBoxItem key={id} value={key} text={value} />
        ))}
      </SelectBox>
    </>
  );
};

export default DropdownFilter;
