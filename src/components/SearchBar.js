import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
    const BarStyling = {width:"200px",background:"#000", border:"1px", padding:"0.5rem", borderColor:"#7A4EFD"};
    return (
        <div className="input-wrapper">
            <input
                type="text"
                placeholder=""
            />
        </div>
    );
}

export default SearchBar