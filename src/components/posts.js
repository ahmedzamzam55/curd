import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPost ,deletePost ,updatePost } from '../redux/postsSlice';

export default function Posts() {
        const [title,setTitle]=useState();
        const [description,setDescription]=useState();
        const [id,setId]=useState(null);

        const [updatedTitle,setUpdatedTitle]=useState();
        const [updatedDescription,setUpdatedDescription]=useState();

        const [isEdit ,setIsEdit]=useState(false);
        console.log(title,description);
        const posts= useSelector((state)=> state.posts.items)


        const dispatch =useDispatch();

  


  return (
    <div>
    <div className='form'>
            <input type='text'
             placeholder='Enter the title'
             value={title}
             onChange={(e)=> setTitle(e.target.value)}
             />
            <input 
                    type='text'
                    value={description}
                    placeholder='Enter the description'
                     onChange={(e)=> setDescription(e.target.value)}
             />
            <button onClick={() => {
                 if (title.trim() !== '' && description.trim() !== '') {
                     dispatch(addPost({id: posts.length +1, title, description}));
                    setTitle("");
                    setDescription("")npm }
            }}>Addbutton</button>



            </div>
      
    <div   className='posts' >
        {posts.length > 0 ? posts.map(post => <div key={post.id} className='post'>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <button onClick={()=> {
                setIsEdit(true)
                setId(post.id)
            }}>Edit</button>
            <button onClick={()=> dispatch(deletePost({id:post.id}))}>Delete</button>
            <br/>
            {isEdit && id === post.id&&(
                <>
                <input
                 type='text'
                  placeholder='updated Title'
                  onChange={(e)=> setUpdatedTitle(e.target.value)}
                  />
                <input
                 type='text'
                  placeholder='updated Desc'
                  onChange={(e)=> setUpdatedDescription(e.target.value)}
                  />
                <button onClick={()=>{
                    if(updatedTitle.trim() !== '' && updatedDescription.trim() !== ''){
                    dispatch(updatePost({ id:post.id , title: updatedTitle, description:updatedDescription })) 
                    setIsEdit(false)}
                }}>update</button>
                </>
            )
            }

        </div>
        ) : "there is no posts"}

    </div>

            </div>


  );
}

