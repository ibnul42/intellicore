import React, { useRef, useState } from 'react';
import Slider from "react-slick";
import { OurOffice } from '../../../Components/OurOffice/OurOffice';
import Title from '../../../Components/Title/index';
import './description.css';

const Description = () => {

  const people = [
    {
      name: 'Razibul Islam',
      role: 'Chairman',
      imageUrl: "/Assets/About/leadership/person1.svg",
    },
    {
      name: 'Md Shariful Islam',
      role: 'Managing Director & CEO',
      imageUrl:
        '/Assets/About/leadership/person2.png',
    },
    {
      name: 'Sajal Mustafiz',
      role: 'Director & CTO',
      imageUrl:
        '/Assets/About/leadership/person3.svg',
    },
    {
      name: 'Abu Maruf Md Saifullah',
      role: 'Director',
      imageUrl:
        '/Assets/About/leadership/person4.svg',
    },
    {
      name: 'Md. Azmeer Hossin Talukder',
      role: 'Director',
      imageUrl:
        '/Assets/About/leadership/person5.svg',
    },
    {
      name: 'Abdullah Zubair',
      role: 'Director',
      imageUrl:
        '/Assets/About/Ellipse3.png',
    },

  ]
  const [start, setStart] = useState(true)

  const divContainer = useRef(null)

  const videoPlayer = (e) => {

    if (start === false) {
      divContainer.current.pause()
      setStart(true)
    } else if (start === true) {
      divContainer.current.play()
      setStart(false)
    }

  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  }

  return (
    <div>
      {/* who we are  */}
      <div className="grid grid-cols-12 text-3xl gap-10 max-w-7xl px-4 mx-auto mt-16">
        {/* description  */}
        <div className="col-span-12">
          <h6 className="font-bold tracking-widest sm:text-3xl mb-4 text-black ">Who <span className='text-[#0199FE]'>We</span > Are <span className='text-[#0199FE]'>?</span>
          </h6>
          <p className='text-xl text-slate-500 text-justify '>
            Mistri Solutions Limited (MSL) is a software development company that excels offering innovative approaches and emerging concepts for its clients. We are confident in supplying high-quality software as the foundation for digital transformation. Our highly skilled in-house and international expert provides you with solutions that will give you an edge in the marketplace. Your project for software development to enhance business should be entrusted to Mistri Solutions Limited (MSL).
          </p>

        </div>

        {/* video  */}
        {/* <div className="lg:col-span-2 flex justify-center col-span-5 relative">
          <video onClick={(event) => videoPlayer(event)} ref={divContainer} width="600">
            <source src="/Assets/About/mistri.mp4" type="video/mp4" />
            Your browser does not support HTML video.
          </video>
          <img className={`absolute top-[35%] max-w-[15vw] transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 ${start === true && "block"} ${start === false && "hidden"}`} onClick={(event) => videoPlayer(event)} src="/Assets/About/play-circle.svg" alt="" />
        </div> */}
      </div>

      {/* out mission and vision  */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl px-4 mx-auto mt-20   relative">

        <div className="bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-900	absolute w-full h-full top-20  md:h-[32rem] -z-10"></div>
        <div className="flex flex-col justify-between items-center 	gap-8	">

          <section class="w-96	">
            <div class="flex  h-full bg-gray-100 p-8 flex-col text-gray-900">
              <div class="flex items-center mb-3">
                <img className='w-[50px] mr-5	' src="/Assets/About/mission.svg" alt="" />
                <h2 class=" text-xl title-font font-medium">Our Mission</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base text-justify">
                  MSL’s mission is to give the future a new form, one in which on-demand business platforms make it easy to launch a brand-new business. MSL adheres to the philosophy that our customers should be given the opportunity to expand and mature according to their own standards, just as we do with our goods and services.
                </p>
              </div>
            </div>
          </section>


          <section class="w-96	shadow-lg shadow-black-500/40 ">
            <div class="flex  h-full bg-gray-100 p-8 flex-col">
              <div class="flex items-center mb-3">
                <img className='w-[50px] mr-5	' src="/Assets/About/star.svg" alt="" />
                <h2 class="text-gray-900 text-xl title-font font-medium">Our Vision</h2>
              </div>
              <div class="flex-grow">
                <p class="leading-relaxed text-base text-justify	">
                  MSL's vision is to become a premier performer by satisfying the expectations of our clients through the development of digital platform strategies, quality software solutions, and the creation of generic expansion plans.
                </p>
              </div>
            </div>
          </section>

        </div>
        <div className="flex justify-center items-center row-start-1 md:col-start-2 mt-32 mb-20	md:mt-0">

          <div className='bg-white h-[20rem] w-[20rem] relative '>
            <img className=' w-[500px] absolute right-0 top-0 sm:top-[20px] sm:right-[20px]' src="/Assets/About/Rectangle.png" alt="" />
          </div>

        </div>
      </div>



      {/* leadership  */}
      <div className="mx-auto max-w-7xl py-5 px-4 text-center sm:px-6 lg:px-8 lg:py-15 mb-20">
        <div className="space-y-8 sm:space-y-12 mt-16 md:mt-1">
          <Title title_text="Leadership" />
          {/* <ul
            role="list"
            className="mx-auto grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-3 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 "
          >
            {people.map((person) => (
              <li className='flex justify-center mt-6' key={person.name}>
                <div className="space-y-4 relative  rounded-full w-64 md:w-96 overflow-hidden  employee">
                  <img className="mx-auto h-50 w-50 rounded-full " src={person.imageUrl} alt="" />


                  <div className="space-y-2 absolute w-full h-full flex justify-center items-center text-white socialMedia">
                    <div className="font-medium lg:text-sm">
                      <h3 className='text-lg mb-1'>{person.name}</h3>
                      <p className="text-white text-xs mb-2">{person.role}</p>
                      <ul className='flex justify-center pt-3'>
                        <li className='bg-[#0093F6] rounded-full w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                            <img className="w-full transition-all	" src="Assets/Icons/facebook.svg" alt="" />
                        </li>
                        <li className='bg-[#0093F6] rounded-full  w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                            <img className="w-full" src="Assets/Icons/linkedin.svg" alt="" />
                        </li>
                        <li className='bg-[#0093F6] rounded-full  w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                            <img className="w-full" src="Assets/Icons/twitter.svg" alt="" />
                        </li>
                    </ul>
                    </div>
                    
                  </div>
                </div>
              </li>
            ))}
          </ul> */}



          <div className='flex justify-center overflow-hidden'>
            <div
              style={{
                width: "700px",

              }}>

              <Slider {...settings}>
                {people.map((person) => (
                  <div key={person.name}>
                    <div className='flex justify-center'>
                      <div className="space-y-4 relative m-1.5 rounded-full overflow-hidden  employee ">
                        <img className="mx-auto w-64	rounded-full " src={person.imageUrl} alt="" />


                        <div className="space-y-2 absolute w-full h-full flex justify-center items-center text-white socialMedia">
                          <div className="font-medium lg:text-sm">
                            <h3 className='text-base mb-1'>{person.name}</h3>
                            <p className="text-white text-xs mb-2">{person.role}</p>
                            <ul className='flex justify-center pt-3'>
                              <li className='bg-[#0093F6] rounded-full w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                                <img className="w-full transition-all	" src="Assets/Icons/facebook.svg" alt="" />
                              </li>
                              <li className='bg-[#0093F6] rounded-full  w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                                <img className="w-full" src="Assets/Icons/linkedin.svg" alt="" />
                              </li>
                              <li className='bg-[#0093F6] rounded-full  w-10 h-10 mx-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125  duration-300'>
                                <img className="w-full" src="Assets/Icons/twitter.svg" alt="" />
                              </li>
                            </ul>
                          </div>

                        </div>
                      </div>

                    </div>

                  </div>
                ))}

              </Slider>
            </div>
          </div>





        </div>
      </div>



      {/* Our office  */}


      <OurOffice />



    </div>
  )
}
export default Description