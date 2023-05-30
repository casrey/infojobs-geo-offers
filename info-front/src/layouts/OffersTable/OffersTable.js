import React from "react";

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
  Button,
} from "@tremor/react";

import { CircularProgress, Tooltip } from "@mui/material";
import ComparisonModal from "./ComparisonModal/ComparisonModal";

const OffersTable = ({
  offers = [],
  isLoading,
  isSuccess,
  offerStatus,
  isFetchingOffers,
}) => {
  const [selectedOffers, setSelectedOffers] = React.useState([]);
  const [openComparisonModal, setOpenComparisonModal] = React.useState(false);

  const maxComparableOffers = 4;

  const getSelectedOfferIndex = (offerId) => {
    return selectedOffers?.findIndex(({ id }) => offerId === id);
  };

  const handleOfferSelection = (offerId) => {
    const selectedOfferIndex = getSelectedOfferIndex(offerId);
    if (selectedOfferIndex < 0 && selectedOffers.length < maxComparableOffers) {
      const offersIndex = offers?.findIndex(({ id }) => offerId === id);
      setSelectedOffers((prev) => [...prev, offers[offersIndex]]);
    } else {
      const tempSelectedOffers = [...selectedOffers];
      tempSelectedOffers.splice(selectedOfferIndex, 1);
      setSelectedOffers(tempSelectedOffers);
    }
  };

  return (
    <Card className="h-full">
      <Title>Ofertas Disponibles</Title>
      {(isLoading || isFetchingOffers) && (
        <div className="flex h-full w-full justify-center items-center">
          <CircularProgress size="9rem" />
        </div>
      )}

      {!isFetchingOffers && !isLoading && offers.length === 0 && (
        <div className="flex h-full w-full justify-center items-center">
          <Text>
            {isSuccess && offerStatus === "success"
              ? "No hay resultados para tu busqueda"
              : "Introduce los parametros para buscar"}
          </Text>
        </div>
      )}
      {!isFetchingOffers && !isLoading && offers.length > 0 && (
        <div className="text-center">
          <Table className="mt-5 max-h-96 overflow-scroll overflow-x-hidden w-full">
            <TableHead>
              <TableRow>
                <TableHeaderCell>Cargo</TableHeaderCell>
                <TableHeaderCell>Ciudad</TableHeaderCell>
                <TableHeaderCell>Salario</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {offers.map(({ id, city, title, salaryDescription }) => (
                <TableRow
                  className={getSelectedOfferIndex(id) >= 0 ? "bg-sky-200" : ""}
                  key={id}
                  onClick={() => handleOfferSelection(id)}
                >
                  <Tooltip title={title} placement="bottom">
                    <TableCell>
                      <Text className="text-ellipsis overflow-hidden w-28">
                        {title}
                      </Text>
                    </TableCell>
                  </Tooltip>
                  <TableCell>
                    <Text className="text-ellipsis overflow-hidden w-16">
                      {city}
                    </Text>
                  </TableCell>
                  <TableCell>
                    <Text className="text-ellipsis overflow-hidden w-36">
                      {salaryDescription}
                    </Text>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Text className="mt-1">
            Mínimo 2 , Máximo {maxComparableOffers} ofertas para comparar{" "}
          </Text>

          <Button
            disabled={selectedOffers.length < 2}
            className="mt-2"
            size="lg"
            variant="primary"
            onClick={() => setOpenComparisonModal(true)}
          >
            <p>Comparar Ofertas</p>
          </Button>
          <ComparisonModal
            selectedOffers={selectedOffers}
            openComparisonModal={openComparisonModal}
            setOpenComparisonModal={setOpenComparisonModal}
          />
        </div>
      )}
    </Card>
  );
};

export default OffersTable;
