import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { callRegistMenuAPI } from '../apis/MenuAPICalls';

function MenuRegistForm() {

    const result = useSelector(state => state.menuReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [registMenu, setRegistMenu] = useState(
        {
            id: 0,
            menuName: '',
            menuPrice: 0,
            menuHeart: '',
            menuStart: '',
            isOrderable: false,
            detail : {
                description: '',
                image: ''
            }
        }
    );

    const onChangeHandler = (e) => {

        let name = e.target.name;
        let value = e.target.value;

        switch(name) {
            case 'menuPrice' : 
                value = parseInt(value); 
                break;
            case 'isOrderable' : 
                value = !!value; 
                break;
            case 'description' : 
                name = 'detail';
                value = {
                    description : value,
                    image : registMenu.detail.image
                };
                break;
        }

        setRegistMenu(
            {
                ...registMenu,
                [name] : value
            }
        );

        console.log(registMenu);

    }

    const fileChangeHandler = async (e) => {
        const file = e.target.files[0];
        console.log(file);
        const base64 = await convertBase64(file);
        console.log(base64);
        setRegistMenu(
            {
                ...registMenu,
                detail : {
                    description : registMenu.detail.description,
                    image : base64
                }
            }
        );

        console.log(registMenu);
    }

    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(file)
          fileReader.onload = () => {
            resolve(fileReader.result);
          }
          fileReader.onerror = (error) => {
            reject(error);
          }
        })
      }

      
      useEffect(
        () => {

            if(result.regist) {
                alert('상품 등록');
                navigate(`/menu`);
            }
        },
        [result]
      );

    const onClickHandler = () => {

        dispatch(callRegistMenuAPI(registMenu));
    }

    return(
        <div>  
            <label>상품 이름 : </label>
            <input type="text" name="menuName" value={ registMenu.menuName } onChange={ onChangeHandler }/>
            <br/>
            <label>상품 가격 : </label>
            <input type="number" name="menuPrice" value={ registMenu.menuPrice } onChange={ onChangeHandler }/>
            <br/>
            <label>동물 종류 : </label>
            <select name="menuStart" value={ registMenu.menuStart } onChange={ onChangeHandler }>
                <option>강아지</option>
                <option>고양이</option>
                <option>조류</option>
                <option>물고기</option>
                <option>기타</option>
            </select>
            <br/>
            <label>구매 가능 여부 : </label>
            <select name="isOrderable" value={ registMenu.isOrderable } onChange={ onChangeHandler }>
                <option value="true">구매 가능</option>
                <option value="false">구매 불가</option>
            </select>
            <br/>
            <label>설명 : </label>
            <textarea name="description" value={ registMenu.detail.description } onChange={ onChangeHandler }></textarea>
            <br/>
            <label>사진 : </label>
            <input 
                type="file" 
                name="image"
                accept='image/*'
                onChange={ fileChangeHandler }/>
            <br/>
            <button onClick={ onClickHandler }>상품 등록</button>
        </div>
    );
}

export default MenuRegistForm;