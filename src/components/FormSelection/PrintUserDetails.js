import React, { useRef, useState } from 'react'
import UserDetails from './UserDetails'
import { useReactToPrint } from "react-to-print";
function PrintUserDetails() {
    const [SearchQuery, SetSearchQuery] = useState("");

    //make a PDF
    const ComponentPDF = useRef();
    const DownloadPDF = useReactToPrint({
        content: () => ComponentPDF.current,
        documentTitle: "User Details",
        onAfterPrint: () => {
            alert("PDF Successfully Saved")
        }
    })

    const SearchName = (e) => {
        SetSearchQuery(e.target.value);
    }

    //Let's find the speific Data
    const SearchNameItem = UserDetails.filter((item) => {
        const serachData = SearchQuery.toLowerCase();
        return (
            item.id.toLowerCase().includes(serachData) ||
            item.name.toLowerCase().includes(serachData) ||
            item.email.toLowerCase().includes(serachData) ||
            item.City.toLowerCase().includes(serachData)
        )
    })
    return (
        <>
            <div id='PrintUserDetails'>
                <div className="container">
                    <div className="col-md-8 m-auto pt-5">
                        <div className='d-flex justify-content-between mb-1'>
                            <input type="search" placeholder='Search' onChange={SearchName} className='form-control w-50 mx-1' />
                            <button className='btn btn-danger' onClick={DownloadPDF}>Print data</button>
                        </div>

                        {/* Use the Component PDF */}
                        <div ref={ComponentPDF} style={{ width: "100%" }}>
                            {
                                SearchNameItem.length === 0 ? (
                                    <p className='text-center fs-5 pt-4 text-danger'>This Data Is Not Exist</p>
                                ) : <table class="table">
                                    <thead>
                                        <tr className='table-dark'>
                                            <th scope='col'>Sr No</th>
                                            <th scope="col">Exato ID</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Email</th>
                                            <th scope="col">Position</th>
                                            <th scope="col">City</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            SearchNameItem.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td >{item.id}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.Position}</td>
                                                    <td>{item.City}</td>
                                                </tr>
                                            ))
                                        }
                                    </tbody>
                                </table>

                            }

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrintUserDetails