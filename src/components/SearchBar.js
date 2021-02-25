import React from 'react';
import {ReactComponent as Search} from '../lib/assets/images/search.svg';

const SearchBar = ({keyword,setKeyword}) => {
    return (
        <div className="input-wrapper">
            <input
                type="text"
                placeholder="SEARCH"
            />
            <Search className="icon" stroke='white'/>
        </div>
    );
}

export default SearchBar