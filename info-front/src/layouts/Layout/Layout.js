import React from "react";
import { Grid } from "@tremor/react";

const Layout = ({ children }) => {
  return (
    <Grid numCols={1} numColsSm={2} numColsLg={4} className="gap-2 h-full">
      {children}
    </Grid>
  );
};

export default Layout;
