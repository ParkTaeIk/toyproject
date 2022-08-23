import { Link } from 'react';
import LikeStyle from "../components/MenuItem.module.css";
import like from "../data/menu-detail.json";

function Like() {

    return (
        <Link to = {`/like/${ like.likeCode }`}>
            <div className = { LikeStyle.Like }>
            <img src = { like.detail.image } style = { { maxWidth : 500 } } alt = { like.likeName }/>
                <h3>{ like.likeName }</h3>
                <h3>{ like.likePrice }원</h3>
                <h3>{ like.likeStart }</h3>
            </div>
        </Link>
    );
}

export default Like;