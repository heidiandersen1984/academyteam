import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching(props) {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick, setIdFromButtonClick] = useState(1)
    const handleClick = () => {
        setIdFromButtonClick(id)
    }

    useEffect(() => {
        axios.get(`https://awacademy-classifieds.herokuapp.com/ad`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
            
        })
        .catch(err => {
            console.log(err)
        })
    },[idFromButtonClick])
    return (
        <div>
            <input type='text' value={id} onChange={e => setId(e.target.value)}/>
            <button type="button" onClick={handleClick}> New Ad</button>
            <div>{post.title}</div>
            {/*<ul>
                {
                    posts.map(post => <li key={post.id}> {post.title}</li>)
                }
            </ul>*/}
            
        </div>
    );
}

export default DataFetching;