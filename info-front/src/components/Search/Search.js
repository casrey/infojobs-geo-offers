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

  return (
    <>
      <Text>Escribe la palabra clave</Text>
      <TextInput
        className="mt-2"
        type="text"
        icon={SearchIcon}
        placeholder="Busca por palabra clave"
        onChange={handleInputChange}
        value={searchParam}
      />
    </>
  );
};

export default Search;
