import React from "react";

import { TextInput, Text } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ searchParam, setSearchParam, refetch }) => {
  const handleInputChange = React.useCallback(
    (e) => {
      setSearchParam(e.target.value);
    },
    [setSearchParam]
  );
  /* 
  const handleKeyPress = React.useCallback(
    (event) => {
      if (event.key === "Enter" && !!searchParam) {
        event.preventDefault();
        refetch();
      }
    },
    [refetch, searchParam]
  ); */

  return (
    <>
      <Text>Escribe la palabra clave</Text>
      <TextInput
        className="mt-2"
        type="text"
        icon={SearchIcon}
        placeholder="Busca por palabra clave"
        //onKeyPress={handleKeyPress}
        onChange={handleInputChange}
        value={searchParam}
      />
    </>
  );
};

export default Search;
