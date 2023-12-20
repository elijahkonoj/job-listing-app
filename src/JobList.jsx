import { useState, useEffect } from "react";
import listing from './data/data.json';
import imageJ from './logos/imageJ.webp'
import FilterBar from "./FilterBar";


const JobList = () => {

const [lists, setLists] = useState([]);
const [filteredList, setFilteredlist] = useState([]);
  const [filters, setFilters] = useState({
    role: "",
    level: "",
    tools: [],
    languages: []
  })
    useEffect(() => {
        setLists(listing)
      })


    const clearFilter = () => {
  
        setFilters({
          role: '',
          level: '',
          languages: [],
          tools: [],
        });
     
      console.log("clicked")
    }
    


    const handleRoleFilter = (selectedRole) => {
      const filteredRoleList = lists.filter((list)=> list.role === selectedRole);
      setFilteredlist(filteredRoleList);
      const updatedFilters = {
        ...filters,
        role: selectedRole
      }
      setFilters(updatedFilters)
      console.log({lists, updatedFilters})
      console.log({filteredRoleList})
        
    }
   
     
      const handleLevelFilter = (selectedlevel) => {
      const filteredLevelList = lists.filter((list)=> list.level === selectedlevel);
      setFilteredlist(filteredLevelList);
      const updatedFilters = {
        ...filters,
        level: selectedlevel
     }
     setFilters(updatedFilters)
    }
     const handleLanguageFilter = (selectedlanguage) => {
      console.log({ selectedlanguage })
      const filteredLanguageList = lists.filter((list)=> list.languages.includes(selectedlanguage[0]) );
      setFilteredlist(filteredLanguageList);
      const updatedFilters = {
        ...filters,
        languages: selectedlanguage
     }
     setFilters(updatedFilters)
     }

     const handleToolFilter = (selectedTool) => {
      const filteredToolList = lists.filter((list)=> list.tools.includes(selectedTool[0]));
      setFilteredlist(filteredToolList);
      const updatedFilters = {
        ...filters,
        tools: selectedTool,
     }
     setFilters(updatedFilters)
     console.log(filteredToolList)
     }
    
     const handleFilterChange = () => {
            setFilteredlist(tools, role, level, languages)
     }

    return ( 
        <>
         {filteredList ? (<FilterBar 
          handleFilterChange={handleFilterChange}
          clearFilter={clearFilter} />) : null}
        
        
           <div className="joblisting-container">
                {(filteredList.length ? filteredList : lists).map((list) =>  (
                      <div className='job-list' key={list.id}>
                   
                   <div className='company-profile'>
                   <img src={imageJ} alt='logo' />
                      <h4 id='list'>{list.company}</h4>
                      {list.new  ?
                       (<h4 className='new'>new!</h4>) : null}
                        {list.featured ? 
                         (<h4 className='featured'>featured</h4>) : null}
                      </div>
                      <div className='profile'>
                         <h3>{list.position}</h3>
                          <div className='language-container' key={list.id}>
                             <p id='role' onClick={() =>handleRoleFilter(list.role)}>{list.role}</p>
                             <p id='levels' onClick={() =>handleLevelFilter(list.level)}>{list.level}</p>
                             {list.languages.map((language) => (
                             <p id='list-language' onClick={() =>handleLanguageFilter(list.languages)}>{language}</p>
                             ))}
                             {list.tools.map((tool) => (
                             <p className='tools' onClick={() =>handleToolFilter(list.tools)}>{tool}</p>))}
                          </div>
                      </div>
                      <div className='level-up'>
                         <p id='postAt'> {list.postedAt}</p>
                         <p id='contract'>{list.contract}</p>
                         <p id='location'>{list.location}</p>
                     </div>
                 </div>
           ))}  
        </div>
        </>
     );
}
 
export default JobList;