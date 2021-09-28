import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({fetchedListings, deleteButton}) {
  
  return (
    <main>
      <ul className="cards">
        {fetchedListings.map(item => <ListingCard deleteButton={deleteButton} item={item} key={item.id} />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
