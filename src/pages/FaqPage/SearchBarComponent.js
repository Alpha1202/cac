import React from 'react';
import { IoIosSearch } from 'react-icons/io';

function SearchBar() {
    return (
        <div className="top">
            <div className="input-wrapper">
                <input type="text" placeholder="Type a word that you would like to search for" />
                <div className="icons-wrapper">
                    <IoIosSearch color={"#dedbdb"} size={"1.5rem"} />
                </div>
            </div>
        </div>
    )
}

export default SearchBar;

