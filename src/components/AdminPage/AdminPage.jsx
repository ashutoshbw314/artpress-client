import React, {useState, useEffect} from 'react';
import NavBar from '../shared-components/NavBar/NavBar';
import AddProduct from './AddProduct';
import ManageProducts from './ManageProducts';

function AdminPage() {
  const tabs = ["Manage Products", "Add Artwork", "Edit Artwork"];
  const [tab, setTab] = useState(tabs[0]);

  return (
    <div className='h-screen'>
      <NavBar />
      <div className='flex lg:grid lg:grid-cols-12'>
        <div className='pt-4 mr-3 bg-indigo-900 space-y-2 lg:col-span-3' style={{height: 'calc(100vh - 44px)'}}>
          <div onClick={() => setTab(tabs[0])} className={`${tab == tabs[0] ? 'bg-indigo-500' : ''} flex px-3 py-2 text-lg text-white cursor-pointer hover:bg-indigo-500`}>
            <svg className='w-6 text-white lg:mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
</svg>
            <span className="hidden lg:block">Manage Artworks</span>
          </div>
          <div onClick={() => setTab(tabs[1])} className={`${tab == tabs[1] ? 'bg-indigo-500' : ''} flex px-3 py-2 text-lg text-white cursor-pointer hover:bg-indigo-500`}>
            <svg className='w-6 text-white lg:mx-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
</svg>
            <span className="hidden lg:block">Add Artwork</span>
          </div>
          <div onClick={() => setTab(tabs[2])} className={`${tab == tabs[2] ? 'bg-indigo-500' : ''} flex px-3 py-2 text-lg text-white cursor-pointer hover:bg-indigo-500`}>
            <svg className='w-6 text-white lg:mx-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
  <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" />
</svg>
            <span className="hidden lg:block">Edit Artwork Info</span>
          </div>
        </div>
        <div className='w-full pr-3 lg:col-span-9'>
          { tab == tabs[0] && <ManageProducts /> }
          { tab == tabs[1] && <AddProduct /> }
        </div>
      </div>
    </div>
  )
}

export default AdminPage;
