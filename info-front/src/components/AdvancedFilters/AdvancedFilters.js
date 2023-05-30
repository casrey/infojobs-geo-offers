import { Card, Col, Flex } from "@tremor/react";
import countries from "../../fixtures/countries.json";
import DropdownFilter from "../DropdownFilter/DropdownFilter";
import SliderFilter from "../SliderFilter/SliderFilter";

const AdvancedFilters = ({ advancedFilters, setAdvancedFilters }) => {
  return (
    <Card>
      <Flex>
        <Col numColSpan={1} numColSpanLg={1}>
          <DropdownFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
            field="country"
            options={countries}
          />
        </Col>
        <Col
          numColSpan={1}
          numColSpanLg={1}
          className="flex flex-col items-center"
        >
          <SliderFilter
            advancedFilters={advancedFilters}
            setAdvancedFilters={setAdvancedFilters}
          />
        </Col>
      </Flex>
    </Card>
  );
};

export default AdvancedFilters;
