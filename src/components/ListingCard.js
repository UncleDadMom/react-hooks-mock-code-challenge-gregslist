import React, { useState } from "react";

function ListingCard({item, deleteButton}) {
  const [favorite, setFavorite] = useState(null)

  function emojiClickHandler(){
    setFavorite(!favorite)
  }
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        <button onClick={emojiClickHandler} className={favorite?"emoji-button favorite active":"emoji-button favorite"}>{favorite? `★` : `☆`}</button>
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button onClick={()=>deleteButton(item.id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
