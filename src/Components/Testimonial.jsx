import React from 'react'
import doubleQuotes from '../../public/assests/double_quotes.svg'

const Testimonial = ({data,index}) => {
  return (
    <div key={index} className='m-8 p-5 h-[17.5rem] w-[22rem] bg-[#FFF]'>
      <div className='p-5 text-sm text-center border-l-2 border-[#029FAE]'>
       {data.comment}
      </div>
      <div className='m-1'>
        <div className='flex items-center justify-between'>
          <div className='flex'>
            <img src={data.Img} alt="" className='w-10'/>
            <div className='justify-center items-center flex-col ml-2'>
                <div className='text-[0.9rem] text-[#272343] font-semibold text'>
                    {data.name}
                </div>
                <span className='text-[0.9rem] text-[#9A9CAA]'>
                    {data.Designation}
                </span>
            </div>
          </div>
            <img src={doubleQuotes} alt="" className='w-10'/>

        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Testimonial
