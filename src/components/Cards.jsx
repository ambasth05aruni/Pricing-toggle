import React from 'react'
import { useState } from 'react'

function Cards() {

const[annualy,setAnnually]=useState(false);

  return (
    <div name="card" 
     className='h-screen lg:w-full lg:bg-gradient-to-b from-black to-gray-800' >
      <div className='max-w-screen-lg flex flex-row'>
        <section className='p-5 my-10 lg:mx-80 '>

           <div className='toggle my-2'>
<label className='name'>Annually</label>
<input type="checkbox" className='checkbox' id="checkbox" checked={annualy}
onChange={()=>setAnnually(!annualy)} />
<label htmlFor="checkbox" className='label'>
  <div className='ball'></div>
</label>
<label className='name'>Monthly</label>



           </div>
 <div className='flex flex-col justify-center gap-8 text-center max-w-6xl mx-auto lg:gap-0 lg:flex-row'>
<article className='p-8 rounded bg-white mx-20 shadow lg:my-4 lg:mx-0'>
  <h2 className=' font-bold text-slate-800 text-xl  mb-5'>Basic</h2>
  {annualy && <h3  className='flex items-center justify-center text-slate-800 text-5xl'><span className=' text-3xl mr-3'>$</span>19.99</h3>}
 {!annualy &&  <h3  className='flex items-center justify-center text-slate-800 text-5xl'><span className=' text-3xl mr-3'>$</span>199.99</h3>}
  <ul className='flex justify-center flex-col my-8'>
    <li className='border-t border-slate-300 py-3'> 500 GB Storage</li>
    <li className='border-t border-slate-300 py-3'>2 Users Allowed</li>
    <li className='border-y border-slate-300 py-3'>Send upto 3 GB</li>
  </ul>
  <button className='text-white w-fit px-6 py-3 my-2 mx-14 flex items-center rounded-md   bg-cyan-500 shadow uppercase cursor-pointer hover:bg-cyan-400 transition-all duration-200'>Learn More</button>
</article>

<article className=' font-bold  p-8 rounded bg-cyan-500 shadow mx-20 lg:scale-105 lg:mx-0 lg:my-4'>
  <h2 className= 'text-white text-xl mb-5 '>Professional</h2>
  {annualy && <h3  className='text-slate-800 text-5xl'><span className=' text-3xl mr-3'>$</span>24.99</h3>}
  {!annualy && <h3 className='text-slate-800 text-5xl'><span className=' text-3xl mr-3'>$</span>249.99</h3>}
  <ul className='flex justify-center flex-col my-8'>
    <li className='text-white border-t border-white py-3 '>1 TB Storage</li>
    <li className='text-white border-t border-white py-3'>5 Users Allowed</li>
    <li className='text-white border-y border-white py-3 '>Send upto 10 GB</li>
  </ul>
  <button className='text-black w-fit px-6 py-3 my-2 mx-14 flex items-center rounded-md   bg-white shadow uppercase cursor-pointer hover:bg-transparent transition-all duration-200'>Learn More</button>
</article>

<article className='p-8 rounded bg-white mx-20 shadow lg:my-4 lg:mx-0'>
  <h2 className=' font-bold  text-slate-800 text-xl mb-5'>Master</h2>
  {annualy && <h3 className='flex items-center justify-center text-slate-800 text-5xl'><span className=' text-3xl mr-3'>$</span>39.99</h3>}
  {!annualy && <h3 className='flex items-center justify-center text-slate-800 text-5xl'><span className=' text-3xl mr-3'>$</span>399.99</h3>}
  <ul className='flex  justify-center flex-col my-8'>
    <li className='border-t border-slate-300 py-3'> 2 TB Storage</li>
    <li className='border-t border-slate-300 py-3'>10 Users Allowed</li>
    <li  className='border-y border-slate-300 py-3'>Send upto 20 GB</li>
  </ul>
  <button className='text-white w-fit px-6 py-3 my-2 mx-14 flex items-center rounded-md   bg-cyan-500 shadow uppercase cursor-pointer hover:bg-cyan-400 transition-all duration-200'>Learn More</button>
</article>
       </div>

        </section>
      </div>
    </div>
  )
}

export default Cards







