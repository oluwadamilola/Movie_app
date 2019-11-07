import React from 'react'

 function Search() {
   const [search, setSearch] = useState();
   const [searchResults, setsearchResults] = useState([]);

   const handleChange = event =>{
     setSearch(event.target.value)
   };
   
   useEffect(() =>{
     const results = characters.filter()
   })

  return (
    <div>
     <form className="form" id="addItemForm">
        <input
          type="text"
          className="search"
            placeholder="search here"
        />
        <button className="btn" onClick={}>
          search
        </button>
      </form>
    </div>
  )
}

export default Search
