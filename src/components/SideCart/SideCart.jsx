import { useEffect, useState } from "react"
import { useCart } from "../../store"
import styles from "./SideCart.module.css"
import Swal from "sweetalert2";

export default function SideCart() {
  const { resetCart, closeCart, productsInCart, decrementQty, incrementQty } = useCart()
  const [total, setTotal] = useState(0);
  const handleReset = () => {
    Swal.fire({
      icon: "question",
      title: 'Are you sure you want to reset your cart?',
      text: 'All products in your cart will be removed',
      showCancelButton: true,
      cancelButtonText: "No",
      confirmButtonText: "Yes, reset cart"
    }).then((res) => {
      if (res.isConfirmed) {
        resetCart();
      }
    })
  }

  useEffect(() => {
    let newTotal = productsInCart.reduce((acc, el) => { return acc + el.qty * +el.product_price }, 0)
    setTotal(newTotal)

  }, [productsInCart])
  return (
    <div className={styles.overlay} onClick={closeCart}>
      <div onClick={(e) => e.stopPropagation()} className=" flex flex-col p-3 animate__animated animate__fadeInRight w-[450px] h-[100vh] overflow-auto bg-white fixed top-0 right-0">
        <p>Your Cart</p>
        <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-5">
          {
            productsInCart.map((el, index) => {
              return (

                <div key={el.documentId} className="flex gap-3 justify-center items-center">
                  <p className="m-0"> {index + 1} </p>
                  <div className="flex items-center gap-2">
                    <img src={el.product_img} className="w-[50px] h-[50px] object-contain"></img>
                    <p className="m-0">{el.product_name}</p>
                  </div>
                  <p className="m-0 p-0">${el.product_price}</p>
                  <div className="flex items-center justify-center gap-3">
                    <button className="btn btn-danger w-[25px] h-[25px] p-0 " onClick={() => { decrementQty(el.documentId) }}> - </button>
                    <p className="m-0 p-0">{el.qty}</p>
                    <button className="btn btn-success w-[25px] h-[25px] p-0" onClick={() => { incrementQty(el.documentId) }}> + </button>
                  </div>
                  <div>${el.qty * el.product_price} </div>
                  <br></br>

                </div>

              )
            })
          }
          <div className="flex  gap-5">
            <p >Total</p>
            <p>${total} </p>
          </div>

        </div>

        <button className="btn !font-[roboto] !bg-[var(--darkgreen)] !text-[var(--offwhite)] !uppercase hover:!bg-[var(--brownish)] hover:!text-[var(--light)] transition" >Checkout</button>
          <button onClick={handleReset} className="btn  btn-danger !font-[roboto] !uppercase  transition" >Reset Cart</button>
          </div>
      </div>
    </div>
  )
}
