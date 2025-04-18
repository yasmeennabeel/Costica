// global state
// initiate state
import { create } from "zustand";
import model1 from '../assets/imgs/model.webp'
import model2 from '../assets/imgs/model2.webp'
import model3 from '../assets/imgs/model3.webp'
import model4 from '../assets/imgs/model4.webp'

export const useCategories = create(() => ({
    // returns object feha value of state and actions of state (method)
    data: [
        {documentId: 1, name: "Skin Care", path: 'skincare',  price: 550 , imgUrl:model1},
        {documentId: 2, name: "Face Care", path: 'facecare', price: 400, imgUrl: model2},
        {documentId: 3, name: "Hair Care", path: 'haircare',  price: 350 , imgUrl: model3},
        {documentId: 4, name: "Makeup", path: 'makeup', price: 550, imgUrl: model4},
        // {documentId: 5, name: "Home", path: '' }
    ]


}))

