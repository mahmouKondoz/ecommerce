import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PayVisa } from "../../../../Api/Payment/Visa"
import { useRef, useState } from "react"
import toast from "react-hot-toast"
import z from "zod"
import { useForm } from "react-hook-form"
import { Phone } from "lucide-react"
import { PayCash } from "../../../../Api/Payment/Cash"
import { useRouter } from "next/navigation"







export default function CheckOut({id , handelCartItem}: { id: string  , handelCartItem:()=>{}}) {

  let router = useRouter()

  let [isloadingVisa, setIsloadingVisa] = useState(false)
  let [isloadingCash, setIsloadingCash] = useState(false)

  const addressRef = useRef<HTMLInputElement>(null)
const phoneRef = useRef<HTMLInputElement>(null)
const cityRef = useRef<HTMLInputElement>(null)






  let handelPatVisa = async () => {

    let shippingAddress = {

      details: addressRef?.current?.value,
      phone: phoneRef?.current?.value,
      city: cityRef?.current?.value

    }


    try {
      setIsloadingVisa(true)
      let data = await PayVisa(id, shippingAddress)
     
      console.log(data);
      
        if (data.status == "success") {

          window.location.href = data.session.url

        }



    } catch (error) {
      toast.error('Network error')
      setIsloadingVisa(true)


    }
    finally {
      setIsloadingVisa(false)
    }
  }


  let handelPayCash = async () => {


    let shippingAddress: object = {
      details: addressRef?.current?.value,
      phone: phoneRef?.current?.value,
      city: cityRef?.current?.value
    }
    try {
      setIsloadingCash(true)
      let data = await PayCash(id, shippingAddress)
     if(data?.status === 'success'){
       toast.success('Order placed successfully! You’ll pay in cash upon delivery.')
      router.push('allorders')
       handelCartItem()

     }else{
      toast.error(data.message)

     }
      console.log(data);

    } catch (error) {
      setIsloadingCash(true)

      console.log(error);


    } finally {
      setIsloadingCash(false)
    }

  }


  return <>

    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="w-full cursor-pointer" variant="outline">Proceed to checkout</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Add Your Address</DialogTitle>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="address">Addess</Label>
              <Input id="address" name=' address' ref={addressRef} />
            </Field>
            <Field>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" name=' phone' ref={phoneRef} />
            </Field>
            <Field>
              <Label htmlFor="city">City</Label>
              <Input id="city" name=' city' ref={cityRef} />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>

            <Button onClick={() => {
              handelPayCash()
            }} type="submit">
              {isloadingCash ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Cash'}
            </Button>

            <Button onClick={() => {

              handelPatVisa()
              // console.log(shippingAddress);


            }} type="submit">
              {isloadingVisa ? <i className="fa-solid fa-spinner fa-spin"></i> : 'Visa'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>

  </>
}
