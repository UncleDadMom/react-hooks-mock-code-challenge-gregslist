import { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [fetchedListings, setFetchedListings] = useState([])
  const [trash, setTrash] = useState(0)
  const [searchFilter, setSearchFilter] = useState("")

  function handleSubmit(e) {
    e.preventDefault();
    setFetchedListings(fetchedListings.filter(items => searchFilter === items.description));
  }
  function deleteButton(e){
    setTrash(e)
  }

  useEffect(()=>{
    fetch(`http://localhost:6001/listings/${trash}`, {
      method: "Delete",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify()
    })
    .then(r=>r.json())
  }, [trash])

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(r=>r.json())
    .then(data=>setFetchedListings(data))
  }, [trash])



  return (
    <div className="app">
      <Header searchFilter={searchFilter} handleSubmit={handleSubmit} setSearchFilter={setSearchFilter}/>
      <ListingsContainer deleteButton={deleteButton} fetchedListings={fetchedListings}/>
    </div>
  );
}

export default App;
