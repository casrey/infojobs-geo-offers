import React from "react";

import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ searchParam, setSearchParam, refetch }) => {
  const handleInputChange = React.useCallback(
    (e) => {
      setSearchParam(e.target.value);
    },
    [setSearchParam]
  );

  const handleKeyPress = React.useCallback(
    (event) => {
      if (event.key === "Enter" && !!searchParam) {
        event.preventDefault();
        refetch();
      }
    },
    [refetch, searchParam]
  );

  return (
    <TextInput
      type="text"
      icon={SearchIcon}
      placeholder="Escribe la palabra clave para buscar"
      onKeyPress={handleKeyPress}
      onChange={handleInputChange}
      value={searchParam}
    />
  );
};

export default Search;
