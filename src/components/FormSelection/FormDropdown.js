// import React, { useEffect, useState } from 'react';
// import axios from "axios";

// function FormDropdown() {
//     const [countryData, setCountryData] = useState([]);
//     const [selectedCountry, setSelectedCountry]=useState("");

//     useEffect(() => {
//         const getCountryData = async () => {
//             try {
//                 axios.get("https://pkgstore.datahub.io/core/world-cities/world-cities_json/data/5b3dd46ad10990bca47b04b4739a02ba/world-cities_json.json").then(
//                     res=> selectedCountry(res.data)
//                 )
//                 const uniqueCountries = [...new Set(countryData.map(data => data.country))];
//                 setCountryData(uniqueCountries);                
//             } catch (error) {
//                 console.log(error);
//             };            
//         }
//         getCountryData();
//     },[]);


//     const countryHandle = (e) => {
//         setSelectedCountry(e.target.value);
//     }
//     return (
//         <>
//             <div id="dropdown" className='text-center'>
//                 <h3 className='my-4'>Please Select Your Address</h3>
//                 <div className="container">
//                     <div className="row justify-content-around">
//                         <div className="col-sm-11 col-md-3 col-lg-3">
//                             <div className="mb-3">
//                                 <select className="form-select" value={selectedCountry} onChange={countryHandle} aria-label="Default select example">
                                    
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="col-sm-11 col-md-3 col-lg-3">
//                             <div className="mb-3">
//                                 <select classname="form-select" aria-label="Default select example">
//                                     <option selected>--Select State--</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="col-sm-11 col-md-3 col-lg-3">
//                             <div className="mb-3">
//                                 <select className="form-select" aria-label="Default select example">
//                                     <option selected>--Select City--</option>
//                                     <option value="1">One</option>
//                                     <option value="2">Two</option>
//                                     <option value="3">Three</option>
//                                 </select>
//                             </div>
//                         </div>


//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default FormDropdown