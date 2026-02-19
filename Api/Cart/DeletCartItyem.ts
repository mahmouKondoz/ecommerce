

export let DeleteCartItem = async (itemId: string) => {



    let response = await fetch(`https://ecommerce.routemisr.com/api/v1/cart/${itemId}`, {
        method: 'DELETE',
        headers: {
            token: localStorage.getItem('userToken') || '' ,
             'Content-Type': 'application/json'
        }
    })

    let data = await response.json()
    return data
   

    // console.log(data);



}