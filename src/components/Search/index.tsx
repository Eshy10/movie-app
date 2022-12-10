import { useState } from "react";
import styles from './search.module.css';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

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
