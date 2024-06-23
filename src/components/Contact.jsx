import React from 'react'
import { useState,useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import {styles} from '../styles'
import {EarthCanvas} from './canvas'
import { SectionWrapper} from '../hoc'
import { slideIn } from '../utils/motion'
import { github } from '../assets'



const Contact = () => {
  const formRef = useRef();
  const [form,setForm] = useState({
    name:'',
    email:'',
    message:'',
  })

  const [loading,setLoading] = useState(false)

  const handleChange = (e) => {
    const {target} = e;
    const {name,value} =target;

    setForm({ ...form,[name]:value,});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs.send(
      'service_oizncc8',
      'template_38sll0v',
      {
        from_name:form.name,
        to_name: 'Gaurav',
        from_email:form.email,
        to_email:'codergaurav02@gmail.com',
        message:form.message
      },
      'TFOstz28vF7wcuQsm'
    )
    .then(() =>{
      setLoading(false);
      alert('Thank You. I will get back to you as soon as possible.');

      setForm({
        name:'',
        email:'',
        message:'',
      })
    },(error) =>{
      setLoading(false)

      console.log(error)

      alert('Something went wrong.')
    }
  )
  }



  return (
    <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
      <motion.div
      variants={slideIn('left',"tween", 0.2, 1)}
      className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-12 flex flex-col gap-8'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Name</span>
              <input 
                type='text'
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder='What is your name'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>  
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your Email</span>
              <input 
                type='email'
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder='What is your email'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-4'>Your message</span>
              <textarea
                rows={7}
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder='What do you want to say?'
                className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
              />
            </label>
            <button
              type='submit'
              className='bg-tertiary outline-none w-fit text-white font-bold shadow-md shadow-primary '
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
            
          </form>
      </motion.div>


      <motion.div
        variants={slideIn('right', "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] '
      >
        <EarthCanvas/>

      </motion.div>
{/* 
    <motion.div
    variants={slideIn('down',"tween" , 0.2, 1)}  >
       <div className="flex space-x-4">
            <a 
                href="https://github.com/yourusername" 
                className="btn github bg-gray-800 text-white py-2 px-4 rounded" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                GitHub
            </a>
            <a 
                href="https://twitter.com/yourusername" 
                className="btn twitter bg-blue-500 text-white py-2 px-4 rounded" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Twitter
            </a>
            <a 
                href="https://www.linkedin.com/in/yourusername" 
                className="btn linkedin bg-blue-700 text-white py-2 px-4 rounded" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                LinkedIn
            </a>
        </div>
    </motion.div> */}
    
    </div>

  )
}

export default SectionWrapper (Contact,"contact")
