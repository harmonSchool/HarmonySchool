import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './SearchBar.css';
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function SearchBar() {
  return (
    <header className='header'>
    <div className='menu-icon'>
    <BsJustify className='icon' />
    </div>
    <div className='header-left' >
        <BsSearch  className='iconSearch'/>
        <input type="text" className='searchInp' placeholder='search . . . '/>
       
    </div>
    <div className='header-right'>
        <BsFillBellFill className='icon'/>
        <BsFillEnvelopeFill className='icon'/>
        <BsPersonCircle className='icon'/>
    </div>
</header>
  );
}

export default SearchBar;
