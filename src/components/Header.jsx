import React from 'react'

const Header = ({setIsShowForm}) => {

   const handleClickShowModal = () => {
    setIsShowForm((isShowForm) => !isShowForm)
   }

  return (
    <header className='flex justify-between py-6 px-3 max-w-[1000px] mx-auto'>
   <h1 className='text-2xl font-bold'>Usuarios</h1>

   <button onClick={handleClickShowModal} className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm"><i className='bx bx-plus'></i> Crear nuevo usuario</button>
    </header>
  )
}

export default Header
