import { create } from 'zustand';

export interface DBState {
    selectedCategory: number;
    categoriesReady: boolean;
    foodItemsReady: boolean;
    cartReady: boolean;
    setSelectedCategory: (category: number) => void;
    setCategoriesReady: (status: boolean) => void;
    setFoodItemsReady: (status: boolean) => void;
    setCartReady: (status: boolean) => void;
    clearDB: () => void; 
}

const useDbStore = create<DBState>()((set) => ({
    selectedCategory: 1,
    categoriesReady: false,
    foodItemsReady: false,
    cartReady: false,
    setSelectedCategory: (categoryId) => {
         set(() => ({
            selectedCategory: categoryId,
        }));
         console.log('SELECTED CATEGORY - ', categoryId)
    },
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