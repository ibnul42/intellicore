import React from 'react'
import Header from '../../Components/HeaderSection/index'
import Pagination from  '../../Components/PaginationSection/index'

const index = () => {
  const blogs = [
    { img: "/Assets/Blog/img1.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img2.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img3.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img4.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img5.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img6.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img7.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img8.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
    { img: "/Assets/Blog/img9.png", date:"15 june 2021", title:"Lorem ipsum dolor sit amet.", content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio fringilla potenti tempus nisl egestas."},
  ]
  return (
    <div className=''>
      {/* Header Section  */}
      <Header name="Blog" />

      {/* Blogs Section  */}
      <section className='max-w-7xl mx-auto px-4 md:px-10 lg:px-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-10 lg:gap-20 my-16'>
          {
            blogs.map((blog,index)=>
            <div>
              <div>
                <img className='mb-8' src={blog.img} alt="" />
              </div>
              <div>
                <p className='text-gray-600 font-light mb-2'>{blog.date}</p>
                <p className='text-xl md:text-2xl font-semibold'>{blog.title}</p>
                <p className='text-lg font-light text-gray-500 mt-3 mb-2'>{blog.content}</p>
                <a href="/blog_details" className='lg:text-lg font-semibold border-b border-gray-400'>Continue Reading</a>
              </div>
            </div>
            )
          }
        </div>
      </section>

      {/* Pagination Section  */}
      <div className='flex items-center justify-center mt-20 mb-8'>
        <Pagination pages="4" selectedPage="3" />
      </div>
      
    </div>
  )
}

export default index