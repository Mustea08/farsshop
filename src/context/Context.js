import { useContext, useReducer } from "react";
import { createContext } from "react"
// import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from "./Reducer";

const Cart =createContext()

const Context = ({children}) => {

  // const products = [...Array(20)].map( () => ({
  //   id: faker.string.uuid(),
  //   name: faker.commerce.productName(),
  //   price: faker.commerce.price(),
  //   inStock: faker.number.arrayElement([0,3,5,6,7]),
  //   image: faker.image(),
  //   fastDelivery: faker.datatype.boolean(),
  //   ratings: faker.random.arrayElement([1,2,3,4,5]),
  // } ))

const products = [{
  id : 0,
  name : "Berbere",
  price: "400",
  description:"A delicious berber soup made with fresh ingredients.",
  image: "./images/berbere.jpg",
  rating: 5,
  fastDelivery: true,
  inStock: [1,2,3,4,5,6,7],
},
{
  id : 1,
  name : "Gebena",
  price: "199",
  description :"An authentic Ghanaian dish that is cooked using local spices ",
  image: "./images/gebena.png",
  rating: Math.random()*5+1,
  fastDelivery: true ,
  inStock: [1,2,3,4,5,6,7],
},
{
  id : 2,
  name : "Bun",
  price: "80",
  description: "bun is a coffee that is drunk by smart people",
  image: "./images/bun.jpg",
  rating: 4 ,
  fastDelivery: false,
  inStock: [1,2,3,4,5,6,7],
},
{
  id : 3,
  name : "Finjal",
  price: "199",
  description :"An authentic Ghanaian dish that is cooked using local spices ",
  image: "./images/finjal.jpg",
  rating: 5,
  fastDelivery: true ,
  inStock: [1,2,3,4,5,6,7],
},
{
  id : 4,
  name : "shiro",
  price: "200",
  description :"An authentic Ghanaian dish that is cooked using local spices ",
  image: "./images/shiro.jpg",
  rating: 3,
  fastDelivery: true ,
  inStock: [1,2,3,4,5,6,7],
},
{
  id : 5,
  name : "date",
  price: "199",
  description :"An authentic Ghanaian dish that is cooked using local spices ",
  image: "./images/date.jpg",
  rating: 4,
  fastDelivery: true ,
  inStock: [1,2,3,4,5,6,7],
},];

const [state, dispatch] = useReducer(cartReducer, {
  products: products,
  cart : []
})


const [productState, productDispatch]  =useReducer( productReducer, {
  byStock: false,
  byFastDelivery: false,
  byRating: 0,
  searchQuery: "",
})

  return (
    <Cart.Provider value={{state, dispatch, productState, productDispatch}}>
      {children}
    </Cart.Provider>
  )
}

export default Context;

export const CartState = () => {
  return useContext(Cart);
}
