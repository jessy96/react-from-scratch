import React, {useState} from "react";

export default function Search(props){
    const [searchInput, setSearchInput] = useState('What do you want to watch?');

    return (
      <div className='search-form'>
        <form onSubmit={(event) => onSubmit(event, searchInput)}>
          <label>FIND YOUR MOVIE</label>
          <div>
              <input className="search-input"
              type="text"
              value={searchInput}
              onChange={(event) => setSearchInput(event.target.value)}
              />
              <input className="search-btn" type="submit" value="SEARCH" />
          </div>
        </form>
      </div>
    );
}

function onSubmit(event, searchInput) {
    console.log(searchInput);
    event.preventDefault();
}
