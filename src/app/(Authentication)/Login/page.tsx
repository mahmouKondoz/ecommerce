'use client'
import { NavContext } from '../../../../Context/NavContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { loginShema } from '@/Validation/login'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { IconsContext } from '../../../../Context/IconsContext'
import { SignUpApi } from '../../../../Api/Auth/SignUp'

export default function Login() {

  let [isloading, setIsLoading] = useState(false)
  let [show, setShow] = useState(false)
  let router = useRouter()

  let nav = useContext(NavContext)
  if(!nav){return null}
  let { setIslogin } = nav



  let user = useContext(IconsContext)
  if(!user){return null}
  let{setUserData} = user





  let form = useForm({
    defaultValues: {
      email: '',
      password: ''
    },
    resolver: zodResolver(loginShema()),
    mode: 'onTouched',


  })

  let handelLogin = async (userData: object) => {

    try {

      setIsLoading(true)
      let { data } = await SignUpApi(userData)
      console.log(data);
      setUserData(data?.user?.name)

      localStorage.setItem('userToken', data.token)
      setIslogin(localStorage.getItem('userToken'))
      if (data.message == 'success') {
        toast.success(`Welcome  ${data.user.name} 👋`)
        router.push('/')

      }



    } catch (error) {
      toast.error('Oops! The email or password you entered is incorrect.')


    }
    finally {
      setIsLoading(false)
    }


  }

  let { formState, handleSubmit, register, watch } = form
  let isTyping = watch('password')
  return <>


    <div className="flex justify-center mt-20">
      <form onSubmit={handleSubmit(handelLogin)} className="w-full max-w-xl p-10">



        <Input
          className="w-full my-3"
          placeholder="Enter your email"
          type="email"
          {...register('email')}
        />

        {formState.errors.email && <p className='text-sm font-bold text-red-700 text-center my-3'>{formState.errors.email.message}</p>}


        <div className='relative'>
          <Input

            className="w-full my-3"
            placeholder="Enter your password"
            type={show ? 'text' : 'password'}
            {...register('password')}

          />
          {isTyping && <i onClick={() => { setShow(!show) }} className={`fa-solid cursor-pointer ${show ? 'fa-eye' : 'fa-eye-slash'} absolute end-5 top-5`}></i>}
        </div>





        <Button className={`w-full my-5 bg-lime-400 text-white hover:bg-lime-500 hover:scale-105 cursor-pointer hover:shadow-2xl duration-500 ${isloading && 'cursor-not-allowed'}`}>

          {isloading ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Login'}

        </Button>
        <Button type='button' onClick={()=>{router.push('Register')}} className='cursor-pointer w-full  hover:scale-105  hover:shadow-2xl duration-500'>Create new account</Button>
      </form>
    </div>

  </>
}
