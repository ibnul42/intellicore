import React from 'react'

const BlogDetails = () => {
  return (
    <div className='max-w-7xl mx-auto'>

      <div className='px-8 md:px-10 lg:px-52 mb-20 mt-10'>

        {/* ------------------------ Cover Image ---------------------------  */}
        <div className='flex justify-center'>
          <img src="/Assets/Blog/BlogDetails/image1.png" alt="" />
        </div>

        {/* ----------------------- Article texts ......................  */}
        <article className=''>
          <h1 className='text-2xl mt-12 mb-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis fermentum quam.</h1>
          <div className='flex flex-col gap-10 font-normal'>
            <p className='opacity-60 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mattis cursus imperdiet nulla rhoncus dui sagittis odio. Scelerisque lectus elit quam neque sit morbi et. Felis dui quam consequat et, eu eu tellus auctor auctor. Cras est elementum, cursus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mattis cursus imperdiet nulla rhoncus dui sagittis odio.</p>
            <p className='opacity-60 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mattis cursus imperdiet nulla rhoncus dui sagittis odio. Scelerisque lectus elit quam neque sit morbi et. Felis dui quam consequat et, eu eu tellus auctor auctor. Cras est elementum, cursus Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mattis cursus imperdiet nulla rhoncus dui sagittis odio. Scelerisque lectus elit quam neque sit morbi et. Felis dui quam consequat et, eu eu tellus auctor auctor. Cras est elementum, cursus ipsum dolor sit amet, consectetur adipiscing elit. Nisl mattis cursus imperdiet nulla rhoncus dui sagittis odio.</p>
            <div className='border-l-2 p-2 border-mid_blue'>
              <p className='text-lg font-semibold text-mid_blue opacity-100'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis fermentum ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mattis cursus imperdiet nulla rhoncus dui sagittis odio. Scelerisque lectus elit quam neque sit morbi et. Felis dui quam consequat et, eu eu tellus</p>
            <p className='opacity-60'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl mattis cursus imperdiet nulla rhoncus dui sagittis odio. Scelerisque lectus elit quam neque sit morbi et. Felis dui quam consequat et, eu eu tellus auctor auctor. Cras est elementum, cursus Lorem ipsum dolor sit .</p>
          </div>
          <div className=''>
            <img className='mx-auto' src="/Assets/Blog/BlogDetails/image4.svg" alt=""/>
          </div>
        </article>

        <div>

        {/* -----------Next and Previos Page Option----------  */}

          <div className='flex flex-col gap-4 md:flex-row justify-between my-16'>

            <div className='flex items-center gap-4 max-w-sm'>
              <div className=''>
                <img className='' src="/Assets/Blog/BlogDetails/image2.png" alt="" />
              </div>
              <div>
                <p className='text-theme_blue'>PREVIOUS</p>
                <p className='w-52'>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
            </div>

            <div className='flex flex-row-reverse md:flex-row items-center gap-4 max-w-sm'>
              <div>
                <p className='text-theme_blue md:text-right'>NEXT</p>
                <p className='w-52'>Lorem ipsum dolor sit amet, consectetur </p>
              </div>
              <div className=''>
                <img className='' src="/Assets/Blog/BlogDetails/image3.png" alt="" />
              </div>
            </div>

          </div>
        </div>


        {/* ---------------------------- Form Section ----------------------  */}
        <p className='text-3xl md:text-4xl text-gray-700'>Leave your though here</p>
        <form className='mt-8'>
          <textarea className='border shadow-[0_0_15px_rgba(0,0,0,0.16)] rounded-lg w-full h-32 md:h-52 p-4' placeholder='Type your opinion'></textarea>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-6'>
            <input className='p-4 shadow-[0_0_15px_rgba(0,0,0,0.16)] rounded-lg border' name="name" placeholder='Your Name'/>
            <input className='p-4 shadow-[0_0_15px_rgba(0,0,0,0.16)] rounded-lg border' name="email" placeholder='Your email'/>
          </div>
          <button className='bg-theme_blue textwhite py-2 px-12 mt-4 rounded-full text-white'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BlogDetails