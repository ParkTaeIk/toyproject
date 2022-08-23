import itemStyle from '../MenuItem.module.css';
import { Link } from 'react-router-dom';

function MenuItem ({ menu }) {

    return (
        <Link to = {`/menu/${ menu.menuCode }`}>
            <div className = { itemStyle.MenuItem }>
            <img src = { menu.detail.image } style = { { maxWidth : 500 } } alt = { menu.menuName }/>
                <h3>{ menu.menuName }</h3>
                <h3>{ menu.menuPrice }원</h3>
                <h3>{ menu.menuStart }</h3>
            </div>
        </Link>
    );
}

export default MenuItem;