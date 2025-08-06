import { create } from 'zustand';

export interface Product {
    id: number;
    name: string;
    reference_name: string;
    description: string;
    price: number;
    photo: string;
    quantity: number;
}

export interface DBState {
    categoriesReady: boolean;
    foodItemsReady: boolean;
    cartReady: boolean;
    setCategoriesReady: (status: boolean) => void;
    setFoodItemsReady: (status: boolean) => void;
    setCartReady: (status: boolean) => void;
    clearDB: () => void; 
}

const useDbStore = create<DBState>()((set) => ({
    categoriesReady: false,
    foodItemsReady: false,
    cartReady: false,
    setCategoriesReady: (status) => {
        set(() => ({
            categoriesReady: status
        }));
    },
    setFoodItemsReady: (status) => {
        set(() => ({
            foodItemsReady: status
        }));
    },
    setCartReady: (status) => {
        set(() => ({
            cartReady: status
        }));
    },
    clearDB: () => {
        set({
            categoriesReady: false,
            foodItemsReady: false,
            cartReady: false
        })
    }
}));

export default useDbStore;