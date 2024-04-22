import './search-box.styles.css';

const SearchBox = ({className, placeHolder, onChangeHandler}) => (
    <input 
        type='search'
        className={`search-box ${className}`} 
        placeholder={placeHolder} 
        onChange={onChangeHandler}
    />
)

export default SearchBox;