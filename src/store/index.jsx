// global state
// initiate state
import axios from "axios";
import { create } from "zustand";

export const domain =  'http://localhost:1337'

export const useCategories = create((set,get) => ({
    // returns object feha value of state and actions of state (method)
    domain: 'http://localhost:1337',

    setData: (categories) => (set(() => ({ data: categories }))),
    activeCategoryID: 0,
    setActiveCategory: (activeTab) => (set(() => ({ activeCategoryID: activeTab }))),
    resetActiveCategory: () => (set(() => ({ activeCategoryID: 0 })))

}))

// export const useCart = create((set,get) => ({
  

//     cartIndex: false,
//     productsInCart: [],
//     openCart: () => (set(() => ({ cartIndex: true }))),
//     closeCart: () => (set(() => ({ cartIndex: false }))),

//     decrementQty: (documentId) => (set((state) => {
//         let copyofCart = [...state.productsInCart];
//         let index = copyofCart.findIndex(el => el.documentId == documentId);

//         if (copyofCart[index].qty > 1) {
//             copyofCart[index].qty--

//         } else {
//             copyofCart.splice(index, 1);
//         }


//         return {productsInCart: copyofCart};
//     })),

//     incrementQty: (documentId) => (set((state) => {
//         let copyofCart = [...state.productsInCart];
//         let index = copyofCart.findIndex(el => el.documentId == documentId);
//         copyofCart[index].qty++

//         return {productsInCart: copyofCart};
//     })),
//     addToCart: (product) => (set((state)=>{
//         let copy = [...state.productsInCart];
//         let obj = copy.find(el=>el.documentId== product.documentId)
//         if(obj){
//             state.incrementQty(product.documentId)
//         }else{
//             copy.push(product);
//         }
//         return {productsInCart: copy}
//     })),
//     resetCart: ()=>(set(()=>({productsInCart:[]})))
// }));

// store/useCart.js

export const loadCartFromStorage = () => {
    try {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Failed to parse cart from storage:", e);
      return [];
    }
  };
  
  export const saveCartToStorage = (cart) => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart:", e);
    }
  };
  

export const useCart = create((set) => {
  const initialCart = loadCartFromStorage(); 

  return {
    cartIndex: false,
    productsInCart: initialCart,

    openCart: () => set(() => ({ cartIndex: true })),
    closeCart: () => set(() => ({ cartIndex: false })),

    decrementQty: (documentId) =>
      set((state) => {
        let copy = [...state.productsInCart];
        let index = copy.findIndex((el) => el.documentId === documentId);
        if (copy[index].qty > 1) {
          copy[index].qty--;
        } else {
          copy.splice(index, 1);
        }
        saveCartToStorage(copy);
        return { productsInCart: copy };
      }),

    incrementQty: (documentId) =>
      set((state) => {
        let copy = [...state.productsInCart];
        let index = copy.findIndex((el) => el.documentId === documentId);
        copy[index].qty++;
        saveCartToStorage(copy);
        return { productsInCart: copy };
      }),

    addToCart: (product) =>
      set((state) => {
        let copy = [...state.productsInCart];
        let obj = copy.find((el) => el.documentId === product.documentId);
        if (obj) {
          obj.qty++;
        } else {
          copy.push({ ...product, qty: 1 });
        }
        saveCartToStorage(copy);
        return { productsInCart: copy };
      }),

    resetCart: () => {
      saveCartToStorage([]);
      set(() => ({ productsInCart: [] }));
    },
  };
});

  export const useSearchStore = create((set)=>({
    query: '',
    results: [],
    setQuery: (query)=> set({query}),
    searchProducts: async (query)=>{
try{
  const res = await axios.get(  `http://localhost:1337/api/products?filters[product_name][$containsi]=${query}&populate=*`  )
  console.log('search results is : ' , res.data)
  set({results: res.data.data || []})
} catch(error){
  console.error('search failed', error);
  set({results: []})
}
    }
  }))