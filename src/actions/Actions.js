
const Actions={

   senData:(type, content)=>{
      return {
          type: type ,
          content: content
      }
  },

  sendId:  (id) =>{
        return Actions.senData('SEND_ID', {id:id})
     },
     
  sendProduct: (product) =>{
        return Actions.senData('SEND_PRODUCT', {product:product})
        
     }
    
}

export default Actions