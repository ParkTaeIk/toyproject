import MenuItem from "../components/items/MenuItem";
import boxStyle from "../modules/Menu.module.css";
import MenuList from "../components/MenuList";
import Box from "../components/MenuItem.module.css";


function Menu() {

    return (
        <div className = { boxStyle.BestBox }>
            <br/><br/><br/>

                <h3>♥ 좋아요</h3>
                <div className = { Box.imgBox }>
                { MenuList.map(menu => <MenuItem key = { menu.menuCode } menu = { menu }/>) }
                </div>
        </div>
    );
}

export default Menu;