import { useState, useEffect } from 'react';
import CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monstors, setMonstors] = useState([]);
  const [filteredMonstors, setFilteredMonstors] = useState(monstors);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => setMonstors(users));
  }, []);

  useEffect(() => {
    const newFilteredMonstors = monstors.filter((monstor) => {
      return monstor.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonstors(newFilteredMonstors);
  }, [monstors, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  return (
    <div className="App">
        <h1 className='app-title'>Monstors Rolodex</h1>
        <SearchBox 
          onChangeHandler={onSearchChange} 
          placeHolder= 'search monstors'
          className='monstor-search-box' />
        <CardList monstors={filteredMonstors} />
      </div>
  )
}

export default App;
