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

export const useCart = create((set) => ({
    cartIndex: false,
    productsInCart: [],
    openCart: () => (set(() => ({ cartIndex: true }))),
    closeCart: () => (set(() => ({ cartIndex: false }))),

    decrementQty: (documentId) => (set((state) => {
        let copyofCart = [...state.productsInCart];
        let index = copyofCart.findIndex(el => el.documentId == documentId);

        if (copyofCart[index].qty > 1) {
            copyofCart[index].qty--

        } else {
            copyofCart.splice(index, 1);
        }


        return {productsInCart: copyofCart};
    })),

    incrementQty: (documentId) => (set((state) => {
        let copyofCart = [...state.productsInCart];
        let index = copyofCart.findIndex(el => el.documentId == documentId);
        copyofCart[index].qty++

        return {productsInCart: copyofCart};
    })),
    addToCart: (product) => (set((state)=>{
        let copy = [...state.productsInCart];
        let obj = copy.find(el=>el.documentId== product.documentId)
        if(obj){
            state.incrementQty(product.documentId)
        }else{
            copy.push(product);
        }
        return {productsInCart: copy}
    })),
    resetCart: ()=>(set(()=>({productsInCart:[]})))
}));

