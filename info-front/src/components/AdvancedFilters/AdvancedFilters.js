import { Card, Col, Flex, Text } from "@tremor/react";
import countries from "../../fixtures/countries.json";
import DropdownFilter from "../DropdownFilter/DropdownFilter";

const AdvancedFilters = ({ advancedFilters, setAdvancedFilters }) => {
  return (
    <Card>
      <Flex>
        <Col numColSpan={1} numColSpanLg={1}>
          <Text>Localización</Text>
          <DropdownFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
            field="country"
            options={countries}
          />
        </Col>
      </Flex>
    </Card>
  );
};

export default AdvancedFilters;
