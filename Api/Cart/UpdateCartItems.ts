




export let UpadateCartItem = async (itemId:string , count:number) =>{
    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${itemId}` , {
        method:'PUT' , 
        headers:{
            token:localStorage.getItem('userToken')||'' , 
            'Content-Type':'application/json'
        } ,
        body:JSON.stringify({count})
    })

    let {data} = await response.json()
    return data
}