import { useState } from "react";
import styles from './search.module.css';
import { useGetMovieBynameQuery } from "../../redux/services/movie";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const {data, isFetching} = useGetMovieBynameQuery(searchTerm);

  console.log(data)

  return (
    <div className={styles['search']}>
      <label htmlFor="search-field">Search</label>
      <div>
        <input
          name="search-field"
          autoComplete="off"
          id="search-field"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
