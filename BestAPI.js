import bests from '../data/best-menu-detail.json';

export function getBestList() {

    return bests;
}

export function getBestDetail(bestCode) {

    return bests.find(best => best.bestCode === parseInt(bestCode));
}

export function searchBest(bestName) {

    return bests.filter(best => best.bestName.match(bestName));
}