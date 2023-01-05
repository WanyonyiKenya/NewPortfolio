import React from 'react'
import LineGradient from '../components/LineGradient'
import { useForm } from 'react-hook-form'
import { motion } from 'framer-motion'

const Contact = () => {
    const {
        register,
        trigger,
        formState:{errors}
    } = useForm()
    const onSubmit = async (e) => {
        const isValid = await trigger()
        if (!isValid) {
            e.preventDefault()
        }
    }
  return (
    <section id='contacts' className='py-48'>
        <motion.div
          className='flex justify-end w-full'
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
            <div className='mr-10'>
                <p className="font-playfair font-semibold text-4xl text-yellow">
                    CONTACT ME
                </p>
                <div className="flex md:justify-end my-5 ">
                     <LineGradient width="w-1/2" />
                </div>
           </div>
        </motion.div>
        {/* image and submit form */}
        <div className='md:flex md:justify-between gap-16 mt-5'>
            <motion.div
                className='basis-1/2 flex justify-center'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
            >
                <img
                    alt='contact'
                    src='../assets/contact-image.jpeg'
                />
            </motion.div>
            <motion.div
                className='basis-1/2 mt-10 md:mt-0'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
            >
                <form 
                    target='_blank'
                    onSubmit={onSubmit}
                    action = 'https://formsubmit.co/douglasmasafu999@gmail.com'
                    method='POST'
                >
                    <input
                        className='w-full bg-blue font-semibold p-3 placeholder-opaque-black'
                        type='text'
                        placeholder = 'NAME'
                        {
                            ...register('name',{
                                required: true,
                                maxLength: 100
                            })
                        }
                    />
                    {errors.name && (
                        <p className='text-red  mt-1 '>
                            {
                                errors.name.type === 'required' && 'This field is required.'
                            }
                            {
                                errors.name.type === 'maxLength' && 'Max name length is 100 char'
                            }
                        </p>
                    )}

                    <input
                          className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
                          type='text'
                          placeholder = 'EMAIL'
                          {
                              ...register('email',{
                                  required: true,
                                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              })
                          }
                    />
                    {
                        errors.email && (
                            <p className='text-red mt-1'>
                                {
                                    errors.email.type === 'required' && 'This field is required.'
                                }
                                {
                                    errors.email.type === 'pattern' && 'Invalid Email Address'
                                }
                            </p>
                        )
                    }
                       <textarea
                          className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
                          type='text'
                          rows='4'
                          columns = '50'
                          placeholder = 'MESSAGE'
                          {
                              ...register('message',{
                                  required: true,
                                  maxLength: 2500
                              })
                          }
                    />
                    {
                        errors.message && (
                            <p className='text-red mt-1'>
                                {
                                    errors.message.type === 'required' && 'This field is required.'
                                }
                                {
                                    errors.message.type === 'pattern' && 'Max-Characters is 2500'
                                }
                            </p>
                        )
                    }
                    <button 
                        type ='submit'
                        className = 'p-5 mt-5 bg-yellow font-semibold text-deep-blue hover:bg-red hover:text-white transition duration-500'                    
                    >Send Message</button>
                </form>
            </motion.div>
        </div>
    </section>
  )
}

export default Contact