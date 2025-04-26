import { toast } from "react-toastify";
import { useCart } from "../../store";

export default function ProductCard({ name, price, imgUrl, product }) {
    const { addToCart } = useCart();

    const handleAdd = () => {
        let obj = {
            documentId: product.documentId,
            product_name: product.product_name,
            product_price: product.product_price,
            qty: 1,
            product_img: imgUrl
        };
        addToCart(obj)
        toast.success('Added to cart!')
    }
    return (
        <div className="card shadow-2xl w-[300px] group">
            <figure className="px-10 pt-10 ">
                <div className='relative overflow-hidden'>
                    <div className="badge outline-0 border-0 px-3 z-10 absolute top-0 left-0 text-white bg-green-600 font-[roboto] m-0  font-extralight uppercase">New</div>
                    <img
                        // src={imgUrl ? imgUrl : '../../assets/imgs/icon-cart.png' }
                        src={imgUrl}
                        alt="Lipstick"
                        className="rounded-xl transition-transform duration-500 ease-all transform hover:scale-90 hover:translate-1 cursor-pointer" />
                </div>
            </figure>
            <div className="card-body justify-center items-center text-center">
                <p className="card-title text-sm font-bold font-[roboto] "> {name} </p>
                <p className='text-black font-normal font-[roboto]'>$ {price}</p>
                <div className="rating ">
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                </div>
                <div className="card-actions w-full">
                    <button onClick={handleAdd} className="w-full bg-[var(--white)] group-hover:bg-[var(--brownish)] transition group-hover:!text-white font-[roboto] py-2 px-2 rounded shadow font-medium text-xs">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
