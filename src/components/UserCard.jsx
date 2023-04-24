import React from 'react'

const UserCard = ({user, deleteUsers, handleClickEdit}) => {
  return (
    <article className='relative border-2 border-gray-600/10 px-3 py-4'>
     <h3 className='text-center font-bold'>{user.first_name} {user.last_name}</h3>
   
     <ul>
        <li>
            <h4 className='text-gray-600/10 border-t border-gray-300/10 '>CORREO</h4>
            <span>{user.email}</span>
        </li>
        <li>
            <h4 className='text-gray-600/10'>CUMPLEAÑOS</h4>
            <span>
            <i className='bx bx-gift'></i> {user.birthday}
            </span>
        </li>
     </ul>
     <div>
        <button onClick={() => deleteUsers(user.id)}><i className='absolute bottom-4 right-12 bx bxs-trash text-white bg-red-500 p-1 rounded-sm mx-2 border-2'></i></button>
        <button onClick={() => handleClickEdit(user)}><i className='absolute bottom-4 right-4  bx bx-pencil p-1 m- bg-gray-400/10 border-2'></i></button>
     </div>
    </article>
  )
}

export default UserCard
