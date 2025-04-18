import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import NavProduct from '../../components/NavProduct/NavProduct';
import { useCategories } from '../../store';

export default function Products() {
    const { data: appCategories, resetActiveCategory, activeCategoryID } = useCategories();
    const navigate = useNavigate();
    const [check, setCheck] = useState(false);
const [categoryInfo, setCategoryInfo] = useState({})

    useEffect(() => {
        let obj = appCategories.find((el) => { return el.documentId == activeCategoryID });
       

            if (obj) {
                setCategoryInfo(obj)
                setCheck(true);
            } else {
                navigate('/error');
            }
        
        return () => {
            // will be executed after component is unmounted
            resetActiveCategory();
        }
    }, [])
    return (
        check && <div className='products overflow-auto'>
            <NavProduct tabName={(categoryInfo.name)}></NavProduct>
            Product in {categoryInfo.name}

        </div>
    )
}
