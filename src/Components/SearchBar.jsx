import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchBar.css";
// // {data.map((value, key) => {
//           return (
//             <a className="dataItem" href={value.link} target="_blank">
//            <p> {value.first_name} </p>
//               </a>
//             );
//         })}

function SearchBar(props) {
  // console.log(props.data)


  // useEffect(() => {
  //   console.log(query)
  //   let newFilter = []
  //   for (const course of props.data) {
  //     if (course.Course_Description.includes(query)) {
  //       newFilter.push(course)
  //     }
  //   }
  //   props.setFilteredData(newFilter)
  //   //console.log(newFilter)
  //   // const newFilter = props.data.filter((value) => {
  //   //   return value.title.toLowerCase().includes(searchWord.toLowerCase());
  //   // })

  // }, []);


  return (
    <div className="search">
      <div className="searchInputs">
        <input type="text" placeholder="Search" onChange={e => props.setQuery(e.target.value)} />
      </div>

      <div className="dataResult"></div>
    </div>
  );
}

export default SearchBar;