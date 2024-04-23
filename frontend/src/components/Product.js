import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ProductContext } from './ProductContext';

const Product = () => {

    const {data,onAddNew,handleEdit,handleUpdate,editId,newRow, setNewRow,updatedRow,setUpdatedRow} = useContext(ProductContext)

    return (
        <div className='container'>
            <table >
                <caption>Products Summary</caption>
                <thead >
                    <tr>
                        <th scope="col"
                        >Product Name</th>
                        <th scope="col"
                        >Quantity</th>
                        <th scope="col"
                        >Price ($)</th>
                        <th scope="col"
                        >ADD/UPDATE
                        </th>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>
                            <input type='text' name='product_name' value={newRow.product_name} onChange={(e) => setNewRow({ ...newRow, [e.target.name]: e.target.value })} placeholder='Product Name' />
                        </td>

                        <td>
                            <input type='text' name='quantity' value={newRow.quantity} onChange={(e) => setNewRow({ ...newRow, [e.target.name]: e.target.value })} placeholder='Product quantity' />
                        </td>

                        <td>
                            <input type='text' name='price' value={newRow.price} onChange={(e) => setNewRow({ ...newRow, [e.target.name]: e.target.value })} placeholder='Product Price' />
                        </td>

                        <td>
                            <button onClick={onAddNew}>Add New</button>
                        </td>
                    </tr>

                    {/* here, conditional rendering has done,
                        first conditional rendering will check that whether data has the values init or not, if yes then values will be rendered in the table....
                        second conditional rendering will check that whenever user clicks on the "EDIT" button, which store the id of the product row and stored into state variable "editId", if stored successfully, then table normal "td" will changed to input fields with the exact same values.                
                    */}

                    {
                        data.length > 0 ?
                            (data.map((prod, index) => {
                                return (
                                    prod.productid === editId ?
                                        <tr key={prod.productid + '' + index}>
                                            <td >
                                                <input type='text' name='product_name' value={updatedRow.product_name} onChange={(e) => setUpdatedRow({ ...updatedRow, [e.target.name]: e.target.value })} />
                                            </td>

                                            <td >
                                                <input type='text' name='quantity' value={updatedRow.quantity} onChange={(e) => setUpdatedRow({ ...updatedRow, [e.target.name]: e.target.value })} />
                                            </td>

                                            <td >
                                                <input type='text' name='price' value={updatedRow.price} onChange={(e) => setUpdatedRow({ ...updatedRow, [e.target.name]: e.target.value })} />
                                            </td>


                                            <td >
                                                <button onClick={() => handleUpdate(prod.productid)}>Update</button>
                                            </td>
                                        </tr>
                                        :
                                        <tr key={prod.productid + '' + index}>
                                            <td>{prod.product_name}</td>
                                            <td>{prod.quantity}</td>
                                            <td>{prod.price}</td>
                                            <td>
                                                <button onClick={() => handleEdit(prod.productid)}>Edit</button>
                                            </td>
                                        </tr>
                                )
                            })) :
                            (
                                "Add New Data"
                            )
                    }
                </tbody>
            </table>
        </div >
    )
}

export default Product;
