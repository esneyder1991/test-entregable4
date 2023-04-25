import React from 'react'
import UserCard from './UserCard'

const UsersList = ({users, deleteUsers, handleClickEdit}) => {
  return (
    <section className='grid gap-10 auto-rows-auto grid-cols-[repeat(auto-fill,_250px)] justify-center mx-auto max-w-[1000px]'>
      {
        users.map((user) => <UserCard key={user.id} user={user} deleteUsers={deleteUsers} handleClickEdit={handleClickEdit}/>)
      }
    </section>
  )
}

export default UsersList
