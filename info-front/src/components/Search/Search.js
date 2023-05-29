import { TextInput } from "@tremor/react";
import { SearchIcon } from "@heroicons/react/solid";

const Search = ({ setSearchParam }) => {
  return (
    <TextInput
      icon={SearchIcon}
      placeholder="Escribe la palabra clave para buscar"
      onChange={(event) => setSearchParam(event.target.value)}
    />
  );
};

export default Search;
