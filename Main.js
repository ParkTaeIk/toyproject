import Navimg from "../components/MenuItem.module.css";
import Maintext from "../components/MenuItem.module.css";
import Slider from "react-slick";
import { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import boxStyle from "../modules/Menu.module.css";
import BestItem from "../components/items/BestItem";
import { getBestList } from "../apis/BestAPI";

function Main() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 5000,
      cssEase: "linear"
    };

    const [bestList, setBestList] = useState([]);

    useEffect(
        () => {

            setBestList(getBestList());
        },
    []
    );

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img className = { Navimg.Navbar } src = "../images/우리펫.jpg"></img>
                <div className = { Maintext.Textarea }>
                <p>
                <br/>
                        <h3>Woo-ri.Pet은 모든 반려동물의 가족을 <br/>우리처럼 생각하는 마음으로 하며,<br/>
                        반려가족의 일원이라는 뜻에서 정해진 이름입니다.</h3>
                    <br/><br/>
                    동물들이 가족이 되면서 조금 더 신경써주고 싶은 반려인들을 위해 만들어진 홈페이지입니다.<br/>
                    <br/>반려동물들의 의미가 예전에 비해 사람들에게 각별해지고 그에 따라 돌보는데 필요한
                    물품과 정보의 양이 증가하고 좀더 자신의 반려동물에 맞는 제품과 올바른 케어를 하기 위한
                    반려인들의 고민이 늘어났습니다.<br/><br/>
                    따라서 이 홈페이지는 이용자들의 평점을 바탕으로한 제품 추천해주고, 이용자들과 다양한 판매업체의
                    중계해줌으로써 반려인의 고민을 덜어줄 수 있고 대기업 뿐만 아니라 다양한 중소규모 판매업체도
                    소개하여 모두에게 유익함을 가져다 주는 것에 초점을 두어 제작되었습니다.
                    <br/><br/><br/><br/><br/><br/>
                     <h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;제조사 : 코딩DIVER</h4>
                </p>
                </div>
            </div>
            <div>

                <h2><br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;오늘은 이 상품 어때요?!</h2>
                
                        <div className = { boxStyle.BestBox }>
                    <Slider {...settings}>
                    { bestList.map(best => <BestItem key = { best.bestCode } best = { best }/>) }   

                    </Slider>
                        </div>
            </div>
        </div>
    );
}

export default Main; 

