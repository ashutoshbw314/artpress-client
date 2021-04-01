import React, {useState, useEffect} from 'react';
import NavBar from '../shared-components/NavBar/NavBar';
import AddProduct from './AddProduct';

function AdminPage() {
  return (
    <div>
      <NavBar />
      <h1 className='text-4xl font-bold'>Admin</h1>
      <AddProduct />
    </div>
  )
}

export default AdminPage;

