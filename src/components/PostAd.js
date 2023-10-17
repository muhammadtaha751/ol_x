import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function PostAd() {
  const [title, setTitle] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [file, setFile] = useState()
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const addData = () => {
    setLoading(true)
    PostAd({ title, description, price, file: file[0] })
    setLoading(false)
    navigate('/dashboard')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <h3>Post Ad</h3>

      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Write your title here' />
      <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Write your description here' />
      <input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='Write your price here' type='number' />
      <input onChange={(e) => setFile(e.target.files)} type='file' />


      {loading ? <img src='https://i.gifer.com/ZKZg.gif' width='20' />
        :
        <button onClick={addData}>Submit</button>}

    </div>
  )

}