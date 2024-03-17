import { useEffect } from 'react'
import './Friends.css'
export default function  Friends(){
    useEffect( ()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriends(data))
    }, [])
    return (
        <div className='box'>
            <h3>Friends: {Friends.length}</h3>
        </div>
    )
 }