import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import skincare from "../../assets/imgs/model.webp";
import facecare from '../../assets/imgs/img-1-14.webp'
import haircare from '../../assets/imgs/testimonial-9-181x260.jpg'
import makeup from '../../assets/imgs/model3.webp'
import NavProduct from '../../components/NavProduct/NavProduct';
import { useCategories } from '../../store';

export default function Products() {
            const {data : appCategories} = useCategories();
    
    const params = useParams();
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);


    useEffect(() => {
        if(params){
            let obj = appCategories.find((el) => { return el.path == params.catName });

            if (obj) {
                setCheck(true);
            } else {
                navigate('/error');
            }
        }
     
    }, [])
    return (
        check && <div className='products overflow-auto'>
            <NavProduct tabName={(params.catName)}></NavProduct>
            Product in {params.catName}
            
        </div>
    )
}
