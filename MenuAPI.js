import menus from '../data/menu-detail.json';

export function getMenuList() {

    return menus;
}

export function getMenuDetail(menuCode) {

    return menus.find(menu => menu.menuCode === parseInt(menuCode));
}

export function searchMenu(menuName) {

    return menus.filter(menu => menu.menuName.match(menuName));
}