import { useState } from "react"
import { useCart } from "../../store"
import styles from "./SideCart.module.css"

export default function SideCart() {
  const { closeCart, productsInCart } = useCart()
  const [total, setTotal] = useState(0);
  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div onClick={(e) => e.stopPropagation()} className=" flex flex-col p-3 animate__animated animate__fadeInRight w-[450px] h-[100vh] overflow-auto bg-white fixed top-0 right-0">
        <p>Your Cart</p>
        <div className="flex flex-col ">
          {
            productsInCart.map((el, index) => {
              return (
             
                  <div key={el.documentId} className="flex gap-3">
                    <p className="m-0"> {index + 1} </p>
                    <div className="flex items-center gap-2">
                      <img src={el.product_img}></img>
                      <p className="m-0">{el.product_name}</p>
                    </div>
                    <p>$ {el.product_price}</p>
                    <div className="flex items-center justify-center gap-3">
                      <button className="btn btn-danger"> - </button>
                      <p className="m-0">{el.qty}</p>
                      <button className="btn btn-success"> + </button>
                    </div>
                    <div>$ {el.qty * el.product_price} </div>
                    <br></br>

                  </div>
               
              )
            })
          }
          <div className="flex  gap-5">
            <p >Total</p>
            <p>$ {total} </p>
          </div>
        </div>


      </div>
    </div>
  )
}
