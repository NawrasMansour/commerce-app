import {
  ADD_TO_CART,
  CLEAR_CART,
  COUNT_CART_TOTALS,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
} from '../utils/actions'

const cart_reducer = (state :any, action:any) => {

  switch (action.type) {
    case ADD_TO_CART:
      const{id,color,amount,product} = action.payload;
      const tempItem = state.cart.find((i : any)=> i.id === id+color);
      if(tempItem){
        const tempCart = state.cart.map( (cartItem : any )=> {
          if(cartItem.id === id + color){
            let newAmount = cartItem.amount + amount;
            if(newAmount > cartItem.max)
            {
              newAmount = cartItem.max
            }
            return {...cartItem,amount: newAmount};
          }else{
            return tempCart;
          }
        });
        return {...state,cart : tempCart}
      }else{
        const newItem= {
          id : id + color,
          name: product.name,
          color,
          amount,
          image: product.images[0].url,
          price: product.price,
          max : product.stock
        };
        return {...state,cart:[...state.cart,newItem]}
      }
    case CLEAR_CART:
      return {...state,cart:[]}

    case COUNT_CART_TOTALS:
      const {total_items,total_amount} = state.cart.reduce((total : any,cartItem : any) => {
        const{amount,price} = cartItem;
        total.total_items += amount;
        total.total_amount += amount * price;
        return total;
      } , {total_items :0,total_amount:0})
      return {...state,total_items,total_amount}

    case REMOVE_CART_ITEM:
      const tempCart = state.cart.filter((item : any)=> item.id !== action.payload)
      return {...state,cart: tempCart}

    case TOGGLE_CART_ITEM_AMOUNT:
      const {ID ,value} = action.payload;

      const tempCrt = state.cart.map( (item : any ) => {
          if(item.id === ID){
            if(value === 'inc'){
              let newAmount = item.amount + 1;
              if(newAmount > item.max)
              {
                newAmount = item.max
              }
              return {...item,amount: newAmount};
            }

            if(value === 'dec'){
              let newAmount = item.amount - 1;
              if(newAmount < 1)
              {
                newAmount = 1
              }
              return {...item,amount: newAmount};
            }
          }else{
            return item;
          }
        });
      return {...state,cart : tempCrt}

    default:
      return state
    throw new Error(`No Matching "${action.type}" - action type`)
  }
}

export default cart_reducer