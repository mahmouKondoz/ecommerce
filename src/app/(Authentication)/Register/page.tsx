'use client'
import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useForm } from 'react-hook-form'
import { registerValidation } from '@/Validation/register';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { watch } from 'fs';
import toast from 'react-hot-toast';



export default function Register() {
  

  let [isloading , setIsLoading] = useState(false)
  let [show , setShow] = useState(false)
   let schema = registerValidation()
   let router = useRouter()






  let form = useForm({

    defaultValues: {

      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '' 

    },
    resolver:zodResolver(schema),
    mode:'onTouched' ,
    
  })
     
  

  let { register, handleSubmit , formState, watch } = form
  let isTyping = watch('password')

  let handelRegister = async (userData: object) => {
    

    try {
      setIsLoading(true)
      let {data}  = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',userData)

    console.log(data);
    if(data.message == "success"){
      toast.success("Successfully created!")
      router.push('/Login')
       

    }
    
    
      
    } catch (error) {
      console.log(error);
      
      toast.error("User aready exist")
      
      
    }
    finally{
      setIsLoading(false)
    }
    
    

  }


  return (



    <>

      <div className="flex justify-center mt-20">
        <form onSubmit={handleSubmit(handelRegister)} className="w-full max-w-xl p-10">

          <Input

           
            className="w-full my-3"
            placeholder="Enter your name"
            type="text"
            {...register('name')}
            
          />
          {
          formState.errors.name &&  <p className='text-sm font-bold text-red-700 text-center my-3'>{formState.errors.name.message}</p>
          }
         

          <Input
            className="w-full my-3"
            placeholder="Enter your email"
            type="email"
            {...register('email')}
          />
          {formState.errors.email &&  <p className='text-sm font-bold text-red-700 text-center my-3'>{formState.errors.email.message}</p>}

         <div className='relative'>
           <Input
          
            className="w-full my-3"
            placeholder="Enter your password"
            type={show ? 'text' : 'password'}
            {...register('password')}
            
          />
          {isTyping && <i onClick={()=>{setShow(!show) }} className={`fa-solid cursor-pointer ${show ?'fa-eye' : 'fa-eye-slash'} absolute end-5 top-5`}></i>}
         </div>
          
          {formState.errors.password && <p className='text-sm font-bold text-red-700 text-center my-3'>{formState.errors.password.message}</p>}

          <Input
            className="w-full my-3"
            placeholder="Confirm Password"
            type="password"
            {...register('rePassword')}
          />
           {formState.errors.rePassword && <p className='text-sm font-bold text-red-700 text-center my-3'>{formState.errors.rePassword.message}</p>}

          <Input
            className="w-full my-3"
            placeholder="Enter your phone number"
            type="number"
            {...register('phone')}
          />
           {formState.errors.phone && <p className='text-sm font-bold text-red-700 text-center my-3'>{formState.errors.phone.message}</p>}

          <Button  className={`w-full my-5 bg-lime-400 text-white hover:bg-lime-500 hover:scale-105 cursor-pointer hover:shadow-2xl duration-500 ${isloading && 'cursor-not-allowed'}`}>
           {isloading  ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Register'}
          </Button>
          <Button type='button' onClick={()=>{router.push('Login')}} className='cursor-pointer  w-full  hover:scale-105  hover:shadow-2xl duration-500'>i aready have an account</Button>
        </form>
        
      </div>
    </>
  )
}