import React from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const AllProducts = (props) => {
    // we pull products from the props that we pulled in the Main page and set it
    const { products } = props

    //since we already have all products as props we only need the delete function in the page
    const handleDelete=(deleteId)=>{
        axios.delete(`http://localhost:8000/api/products/delete/${deleteId}`)
        .then(res=>{
            props.reload()
        })
        .catch(err=>console.log(err))
}
  return (
    <div className='p-3'>
        <h1>All Products:</h1>
        <div>
            {
                products &&
                    products.map((product, i)=>(
                        <div key={i} className="d-flex justify-content-between w-25 m-2 align-items-center">
                            <Link to={`/products/${product._id}`} className="h4">{product.title}</Link>
                            <Link to={`/${product._id}/edit`}>Edit</Link>
                            <button onClick={()=>handleDelete(product._id)} className="btn btn-danger">Delete</button>
                        </div>
                    ))
            }
        </div>
    </div>
  )
} 

export default AllProducts