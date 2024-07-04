import { create } from 'zustand';
import { skinMarket } from '../utils/web3';

// Example data for initial state
const example = [
    {
        "idx": "8",
        "player_name": "Ajitesh",
        "image": "../../",
        "name": "Gripmaster",
        "category": "gloves",
        "game_price": 12.474,
        "game": "Acme Games"
        },
        {
        "idx": "9",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716735696/gloves/r7yrw4h5ca16c3xpsk5c.avif",
        "name": "RapidFire",
        "category": "gloves",
        "game_price": 57.0655,
        "game": "Epic Games"
        },
        {
        "idx": "10",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716735695/gloves/ceghtmafqkhwzqsdyy1x.avif",
        "name": "Edge",
        "category": "gloves",
        "game_price": 9.486,
        "game": "Valve Corporation"
        },
        {
        "idx": "11",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716735695/gloves/nwtbf1l3xom2qtglrzpn.avif",
        "name": "Silhouette",
        "category": "gloves",
        "game_price": 1.4658,
        "game": "Ubisoft"
        },
        {
        "idx": "12",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716735695/gloves/yngwhmfaxnbw94dcgutf.avif",
        "name": "Shadowstrike",
        "category": "gloves",
        "game_price": 47.624,
        "game": "Blizzard Entertainment"
        },
        {
        "idx": "13",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716735695/gloves/q5l4v7hja6wuylwhltkr.avif",
        "name": "Phantom",
        "category": "gloves",
        "game_price": 37.7784,
        "game": "Riot Games"
        },
        {
        "idx": "14",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716735694/gloves/xc93rgiiljfeaxpm16ch.avif",
        "name": "Elfshadow",
        "category": "gloves",
        "game_price": 46.255,
        "game": "Electronic Arts"
        },
        {
        "idx": "15",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/b7w1egjwyhxkvxd54cdw.png",
        "name": "IronHold",
        "category": "container",
        "game_price": 0.2388,
        "game": "Acme Games"
        },
        {
        "idx": "17",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/yy4pwk7srlcpgggr0mb2.png",
        "name": "SteelCrate",
        "category": "container",
        "game_price": 12.5496,
        "game": "Epic Games"
        },
        {
        "idx": "18",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/y8anzuwxg2hma6rr5kgr.png",
        "name": "TitanBox",
        "category": "container",
        "game_price": 18.4492,
        "game": "Valve Corporation"
        },
        {
        "idx": "19",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/ohdjxwaolkoyhrzjjdzw.png",
        "name": "HeavyDuty",
        "category": "container",
        "game_price": 13.8491,
        "game": "Ubisoft"
        },
        {
        "idx": "20",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/ugd7fdpjtnifj3xqov6a.png",
        "name": "RuggedStore",
        "category": "container",
        "game_price": 8.2404,
        "game": "Blizzard Entertainment"
        },
        {
        "idx": "22",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/zllemck3axo9k32xwrsu.png",
        "name": "CargoVault",
        "category": "container",
        "game_price": 5.181,
        "game": "Riot Games"
        },
        {
        "idx": "23",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/zllemck3axo9k32xwrsu.png",
        "name": "GritBin",
        "category": "container",
        "game_price": 3.531,
        "game": "Electronic Arts"
        }
        ,
        {
        "idx": "24",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734281/key/l9ri2ofgswddovfnajq4.png",
        "name": "CyberKey",
        "category": "key",
        "game_price": 3.293,
        "game": "Acme Games"
        },
        {
        "idx": "25",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734280/key/lhdkqrdafxchkfm3nz7s.png",
        "name": "NanoKey",
        "category": "key",
        "game_price": 10.43,
        "game": "Epic Games"
        },
        {
        "idx": "26",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734258/container/ugd7fdpjtnifj3xqov6a.png",
        "name": "QuantumKey",
        "category": "key",
        "game_price": 10.3005,
        "game": "Valve Corporation"
        },
        {
        "idx": "27",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734280/key/ikedbz9vj8afygyoetfc.png",
        "name": "HoloKey",
        "category": "key",
        "game_price": 48.5364,
        "game": "Ubisoft"
        },
        {
        "idx": "28",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734280/key/phievafzr45aitnalvfb.png",
        "name": "MatrixKey",
        "category": "key",
        "game_price": 51.6768,
        "game": "Blizzard Entertainment"
        },
        {
        "idx": "29",
        "player_name": "Ajitesh",
        "image": "https://res.cloudinary.com/duepebytx/image/upload/v1716734280/key/phievafzr45aitnalvfb.png",
        "name": "DataKey",
        "category": "key",
        "game_price": 8.2404,
        "game": "Riot Games"
        }
];

export type SellingItem = {
    idx: string;
    player_name: string;
    image: string;
    name: string;
    category: string;
    game_price: number;
    game: string;
};

interface SellingItemState {
    sellingItems: SellingItem[];
    newSellingItem: SellingItem | null;
    setNewSellingItem: (item: SellingItem | null) => void;
    addSellingItem: (item: SellingItem) => void;
    removeSellingItem: (id: string) => void;
}

// export async function getSkins(){
//     const skinMarketCon=await skinMarket();
//     const length=await 
//     for()
//     await skinMarketCon.methods.getSkinPriceFromGame(idx);
// }

const initialState: Omit<SellingItemState, 'addSellingItem' | 'removeSellingItem' | 'setNewSellingItem'> = {
    sellingItems: example,
    newSellingItem: null,
};

const useSellingItems = create<SellingItemState>((set) => ({
    ...initialState,
    addSellingItem: (item) =>
        set((state) => ({ sellingItems: [...state.sellingItems, item] })),
    removeSellingItem: (id) =>
        set((state) => {
            const newItems = state.sellingItems.filter((item) => item.idx !== id);
            return {
                sellingItems: newItems,
            };
        }),
    setNewSellingItem: (item) => set(() => ({ newSellingItem: item })),
}));

export default useSellingItems;
