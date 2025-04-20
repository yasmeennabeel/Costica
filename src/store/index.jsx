// global state
// initiate state
import { create } from "zustand";



export const useCategories = create((set) => ({
    // returns object feha value of state and actions of state (method)
    domain: 'http://localhost:1337',

    setData: (categories) => (set(() => ({ data: categories }))),
    activeCategoryID: 0,
    setActiveCategory: (activeTab) => (set(() => ({ activeCategoryID: activeTab }))),
    resetActiveCategory: () => (set(() => ({ activeCategoryID: 0 })))

}))

export const useCart = create((set)=>({
cartIndex: false,
productsInCart: [{
    documentId: 1,
    product_name: "iphone",
    product_price: 600,
    qty: 2,
    product_img: ""
},
{
    documentId: 2,
    product_name: "iphone",
    product_price: 600,
    qty: 2,
    product_img: ""
},{
    documentId: 3,
    product_name: "iphone",
    product_price: 600,
    qty: 2,
    product_img: ""
}],
openCart: ()=>(set (()=>({cartIndex: true}))),
closeCart: ()=>(set(()=>({cartIndex: false})))
}));

