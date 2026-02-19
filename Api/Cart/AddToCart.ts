


export let AddToCartBtnApi = async (id:string)=>{
    let reposnse = await fetch('https://ecommerce.routemisr.com/api/v1/cart' , {
            method:'POST' ,
            headers:{
                token:localStorage.getItem('userToken') || '' ,
                'Content-Type':'application/json'
            } ,
            body:JSON.stringify({
                productId: id
            })
        })

        let {data} = await reposnse.json() 
        return data
}