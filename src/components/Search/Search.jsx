import { useState } from 'react'
import './Search.css'

function Search() {
  const [search, setSearch] = useState("Telefone")
  
  const buscar = (e) => {
    e.preventDefault()
    alert(search)
  }

  return (
    <>
      {/* NAV */}
          <form className="d-flex" role="search" onSubmit={buscar}>
            <input 
            className="form-control me-2" 
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            />
              <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        
    </>
  )
}

export default Search
