import { Card, Col, Dropdown, DropdownItem, Flex, Text } from "@tremor/react";
import { CubeIcon, CubeTransparentIcon } from "@heroicons/react/solid";

const AdvancedFilters = () => {
  return (
    <Card>
      <Flex>
        <Col numColSpan={1} numColSpanLg={1}>
          <Text>Select render mode</Text>
          <Dropdown
            className="mt-2"
            onValueChange={(value) =>
              console.log("The selected value is", value)
            }
            placeholder="Render mode"
          >
            <DropdownItem
              value="1"
              text="Transparent"
              icon={CubeTransparentIcon}
            />
            <DropdownItem value="2" text="Outline" icon={CubeIcon} />
          </Dropdown>
        </Col>
        <Col numColSpan={1} numColSpanLg={1}>
          <Text>Select render mode</Text>
          <Dropdown
            className="mt-2"
            onValueChange={(value) =>
              console.log("The selected value is", value)
            }
            placeholder="Render mode"
          >
            <DropdownItem
              value="1"
              text="Transparent"
              icon={CubeTransparentIcon}
            />
            <DropdownItem value="2" text="Outline" icon={CubeIcon} />
          </Dropdown>
        </Col>
        <Col numColSpan={1} numColSpanLg={1}>
          <Text>Select render mode</Text>
          <Dropdown
            className="mt-2"
            onValueChange={(value) =>
              console.log("The selected value is", value)
            }
            placeholder="Render mode"
          >
            <DropdownItem
              value="1"
              text="Transparent"
              icon={CubeTransparentIcon}
            />
            <DropdownItem value="2" text="Outline" icon={CubeIcon} />
          </Dropdown>
        </Col>
        <Col numColSpan={1} numColSpanLg={1}>
          <Text>Select render mode</Text>
          <Dropdown
            className="mt-2"
            onValueChange={(value) =>
              console.log("The selected value is", value)
            }
            placeholder="Render mode"
          >
            <DropdownItem
              value="1"
              text="Transparent"
              icon={CubeTransparentIcon}
            />
            <DropdownItem value="2" text="Outline" icon={CubeIcon} />
          </Dropdown>
        </Col>
        <Col numColSpan={1} numColSpanLg={1}>
          <Text>Select render mode</Text>
          <Dropdown
            className="mt-2"
            onValueChange={(value) =>
              console.log("The selected value is", value)
            }
            placeholder="Render mode"
          >
            <DropdownItem
              value="1"
              text="Transparent"
              icon={CubeTransparentIcon}
            />
            <DropdownItem value="2" text="Outline" icon={CubeIcon} />
          </Dropdown>
        </Col>
      </Flex>
    </Card>
  );
};

export default AdvancedFilters;
