import itemStyle from '../MenuItem.module.css';
import { Link } from 'react-router-dom';

function BestItem ({ best }) {

    return (
        <div>
        <Link to = {`/best/${ best.bestCode }`}>
            <div className = { itemStyle.BestItem }>
            <img src = { best.detail.image } style = { { maxWidth : 500 } } alt = { best.bestName }/>
                <h3>{ best.bestName }</h3>
                <h3>{ best.bestPrice }원</h3>
                <h3>{ best.bestStart }</h3>
            </div>
        </Link>
        </div>
    );
}

export default BestItem;