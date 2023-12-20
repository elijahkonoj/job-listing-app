//import {AiOutlineCloseSquare } from 'react-icons/fa';
  


const FilterBar = ({clearFilter, handleFilterChange}) => {
  

  
    return ( 
        <>
        
      <div className='header'>
        <p id='header-frontend' onChange={handleFilterChange}></p>
        
        <p id='clear' onClick={clearFilter}>clear</p>
      </div>
      </>
     );
}
 
export default FilterBar;