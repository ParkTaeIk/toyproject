import { useDispatch, useSelector } from "react";
import MenuItem from '../components/items/MenuItem';

function MenuList() {

    const result = useSelector(state => state.menuReducer);
    const menuList = result.menulist;
    const dispatch = useDispatch();

    console.log(menuList);

    return (
        menuList && (
            <div className="menuBox">
                  { menuList.map(menu => <MenuItem key={ menu.id } menu={ menu }/>) }
            </div>
        )
    );
}

export default MenuList;