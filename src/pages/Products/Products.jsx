import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import skincare from "../../assets/imgs/model.webp";
import facecare from '../../assets/imgs/img-1-14.webp'
import haircare from '../../assets/imgs/testimonial-9-181x260.jpg'
import makeup from '../../assets/imgs/model3.webp'

export default function Products() {
    const params = useParams();
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
    const [categories] = useState([
        { name: "skinCare", path: 'skincare', imgUrl: { skincare }, price: 550 },
        { name: "faceCare", path: 'facecare', imgUrl: { facecare }, price: 400 },
        { name: "hairCare", path: 'haircare', imgUrl: { haircare }, price: 350 },
        { name: "makeup", path: 'makeup', imgUrl: { makeup }, price: 550 }
    ])

    useEffect(() => {     
        let obj = categories.find((el)=>{return el.path == params.catName});

        if (obj) {
            setCheck(true);
        } else {
            navigate('/error');
        }
    }, [])
    return (
        check && <div className='products'>

            Product in {params.catName}
        </div>
    )
}
