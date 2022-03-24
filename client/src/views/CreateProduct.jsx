import React, {useState} from 'react'
import axios from 'axios'
// import { useHistory } from 'react-router-dom'

const CreateProduct = (props) => {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [description, setDescription] = useState("")
    //const history = useHistory()
    //const [refresh , setRefresh] = useState(true)
    const [errors, setErrors] = useState([])

    // 
    // instead of using winodw.location.relaod to clear form we make new const to set values back to clear after submit
    const clearForm = () =>{
        setTitle("")
        setPrice(0)
        setDescription("")
    }



    const handleSubmit =e=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new',{title, price, description})
            .then(res=>{
                props.reload()
                clearForm()
            })
            .catch(err=>{
                // pull errors
                const errorResponse = err.response.data.errors
                // set as array
                const errorArr = []
                //loop though each key and if error message push to errorArr and set erros as the new arr
                for( const key of Object.keys(errorResponse)){
                  errorArr.push(errorResponse[key]["message"]) 
                }
                console.log(errorArr)
                setErrors(errorArr)
              })
    }

    return (
    <div>
        <form onSubmit={handleSubmit} className="d-flex flex-column p-3 w-25">
            <div className='mt-2'>
                <label className='mr-2 h5'>Title:</label>
                <input type="text" name="title" value={title}
                    onChange={(e)=>setTitle(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'>Price: </label>
                <input type="number" name="price" value={price}
                    onChange={(e)=>setPrice(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label className='mr-2 h5'>Description: </label>
                <input type="text" name="description" value={description}
                    onChange={(e)=>setDescription(e.target.value)}
                />
            </div>
            <button className='btn btn-primary w-25 mt-2'>Create</button>
        </form>

        
        {
        errors.map((err, i)=>{
          return(
            <p key={i} className="ml-4">{err}</p>
        )})
      }
    </div>
  )
}

export default CreateProduct