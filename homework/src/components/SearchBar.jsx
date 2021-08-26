import React, { useState } from "react";
import styles from './searchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('')
    }}>
      <input
        style={{outline:'none', backgroundColor:'transparent', border:'none', borderBottom:'1px solid #FFC300', color:'white'}}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={styles.btn} style={{outline:'none', width:'80px', border:'none', borderRadius:'3px', backgroundColor:'transparent'}} type="submit" value="Add" />
    </form>
  );
}
