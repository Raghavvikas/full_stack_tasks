import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext()
const ProductContextProvider = ({ children }) => {

    // Parent state as "data" to store and retrieve products
    const [data, setData] = useState([]);

    // whenever add new product event is being dispatched, the values of the input fields are stored and managed by "newRow" state
    const [newRow, setNewRow] = useState([{ product_name: "", quantity: "", price: "" }]);

    // whenever update the product row data event is being dispatched, the values of the input fields are stored and managed by "updateRow" state
    const [updatedRow, setUpdatedRow] = useState({ product_name: "", quantity: "", price: "" });

    // When click on EDIT button, PRODUCTID is being stored in "editId" state, so that after editing of row data is done, this "id" will be used to update through API call.
    const [editId, setEditId] = useState(0);

    // // when the component is being mounted and whenever the "data" state changes any moment then GET API call will be executed and stored the values in parent "data" state. 
    useEffect(() => {
        const startTime = new Date();
        const fetchData = () => {
            axios.get('http://localhost:8000/backend/products').then((response) => { setData(response.data) }).catch((error) => {
                console.log(error)
            });
        }
        // execution time in seconds
        fetchData();
        const executionTime = ((new Date()) - startTime) / 1000;
        console.count(executionTime)
    }, [data, setData]);


     // handleUPDATE method will be called and executed, when any kind of changes is being made and clicked on the update button
    // this will execute the PUT method, and using "ID" attribute, will update the values in the database
    const handleUpdate = (id) => {
        axios.put(`http://localhost:8000/backend/products/${id}`, { product_name: updatedRow.product_name, quantity: updatedRow.quantity, price: updatedRow.price }).then(res => { console.log(res); setEditId(0); }).catch(err => console.log(err));
    }


     // we can add new product data to our table and database, when clicked on ADD NEW button....
    // this will create a new product row to products table by sending data through POST method 
    const onAddNew = () => {
        setNewRow({ product_name: "", quantity: "", price: "" })
        axios.post('http://localhost:8000/backend/products', { product_name: newRow.product_name, quantity: newRow.quantity, price: newRow.price }).then(res => console.log(res)).catch(err => console.log(err))
    }

    // handleEdit method will take the "ID" of the corresponding product row and fetch the product data from the database, so that user can edit the values..
    // fetched data will be stored in the UPDATEDROW state, and this states data will render to input fields in the table
    const handleEdit = (id) => {
        axios.get(`http://localhost:8000/backend/products/${id}`).then(res => {
            setUpdatedRow({ product_name: res.data[0].product_name, quantity: res.data[0].quantity, price: res.data[0].price });
        })
        setEditId(id)
    }

    
  return (
    <ProductContext.Provider value={{data,setData,onAddNew,handleEdit,handleUpdate,editId,newRow, setNewRow,updatedRow,setUpdatedRow}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
