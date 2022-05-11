import create from "zustand";

export interface ProductInterface {
  id: number;
  name: string;
  image: string;
}

export interface StoreInterface {
  cart: ProductInterface[];
  addProductOnCart: (product: ProductInterface) => void;
  removeProductOnCart: (product: ProductInterface) => void;
}

const useStore = create((set) => ({
  cart: [],
  addProductOnCart: (product: ProductInterface) =>
    set((state: { cart: ProductInterface[] }) => ({
      cart: [...state.cart, product],
    })),
  removeProductOnCart: (product: ProductInterface) =>
    set((state: { cart: ProductInterface[] }) => ({
      cart: state.cart.filter((result: ProductInterface) => {
        return result.id !== product.id;
      }),
    })),
}));

export default useStore;
