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
      <div onClick={(e) => e.stopPropagation()} className="gap-4 flex flex-col p-3 animate__animated animate__fadeInRight w-[600px] h-[100vh] overflow-auto bg-white fixed top-0 right-0">
        <p>Your Cart</p>
        <div className="flex flex-col gap-2">

          <table className="table ">
            <thead>
              <tr className="font-[roboto] text-md">

                <th>Item Name</th>
                <th>Price (per item)</th>
                <th>Edit Quantity</th>
                <th>Total</th>

              </tr>
            </thead>
            <tbody className="text-center">
              {
                productsInCart.map((el, index) => {
                  return (
                    <tr>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img
                                src={el.product_img}
                                alt="Avatar Tailwind CSS Component" />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{el.product_name}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <p className="m-0 p-0">${el.product_price}</p>

                      </td>

                      <td>
                        <div className="flex items-center justify-center gap-3">
                          <button className="btn btn-danger w-[25px] h-[25px] p-0 " onClick={() => { decrementQty(el.documentId) }}> - </button>
                          <p className="m-0 p-0">{el.qty}</p>
                          <button className="btn btn-success w-[25px] h-[25px] p-0" onClick={() => { incrementQty(el.documentId) }}> + </button>
                        </div>
                      </td>
                      <td>
                        <div>${el.qty * el.product_price} </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>


        </div>
        {<tfoot>
          <tr>
            <div className="flex  gap-5">
              <p >Total Cart</p>
              <p>${total} </p>
            </div>
          </tr>
        </tfoot>}

        <button className="btn !font-[roboto] !bg-[var(--darkgreen)] !text-[var(--offwhite)] !uppercase hover:!bg-[var(--brownish)] hover:!text-[var(--light)] transition" >Checkout</button>
        <button onClick={handleReset} className="btn  btn-danger !font-[roboto] !uppercase  transition" >Reset Cart</button>
      </div>
    </div>
  )
}
