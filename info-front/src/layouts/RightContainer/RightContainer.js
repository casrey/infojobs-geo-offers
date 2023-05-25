import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
} from "@tremor/react";

const data = [
  {
    name: "Viola Amherd",
    Role: "Federal Councillor",
  },
  {
    name: "Simonetta Sommaruga",
    Role: "Federal Councillor",
  },
  {
    name: "Alain Berset",
    Role: "Federal Councillor",
  },
  {
    name: "Ignazio Cassis",
    Role: "Federal Councillor",
  },
  {
    name: "Ueli Maurer",
    Role: "Federal Councillor",
  },
  {
    name: "Guy Parmelin",
    Role: "Federal Councillor",
  },
  {
    name: "Karin Keller-Sutter",
    Role: "Federal Councillor",
  },
];

const RightContainer = () => (
  <Card>
    <Title>List of Swiss Federal Councillours</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Name</TableHeaderCell>
          <TableHeaderCell>Position</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Text>{item.Role}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.departement}</Text>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default RightContainer;
