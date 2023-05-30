import React from "react";

import { Card, Grid, Subtitle, Italic, Text, Bold } from "@tremor/react";

import { Modal, ClickAwayListener } from "@mui/material";

const ComparisonModal = ({
  selectedOffers,
  openComparisonModal,
  setOpenComparisonModal,
}) => {
  return (
    <Modal
      open={openComparisonModal}
      onClose={() => () => setOpenComparisonModal(false)}
      className="absolute"
    >
      <ClickAwayListener onClickAway={() => setOpenComparisonModal(false)}>
        <Grid
          numCols={1}
          numColsLg={selectedOffers.length}
          className="gap-4 bg-neutral-50 p-2 relative m-auto w-9/12 top-20"
        >
          {selectedOffers?.map(
            ({
              id,
              title,
              city,
              salaryDescription,
              study,
              requirementMin,
              link,
              contractType,
            }) => (
              <Card key={id} className="flex w-30 flex-col ">
                <Subtitle className="break-words">
                  <a href={link}>{title}</a>
                </Subtitle>
                <Italic className="mt-4 break-words">{city}</Italic>
                <Text className="mt-2">{`Contrato: ${contractType.value}`}</Text>
                {salaryDescription && (
                  <Bold className="mt-2">{salaryDescription}</Bold>
                )}
                <Text className="mt-2">{`Requisitos: ${requirementMin.substr(
                  0,
                  160
                )}`}</Text>
                <Text className="mt-4">{`Estudio mínimo: ${study.value}`}</Text>
              </Card>
            )
          )}
        </Grid>
      </ClickAwayListener>
    </Modal>
  );
};

export default ComparisonModal;
