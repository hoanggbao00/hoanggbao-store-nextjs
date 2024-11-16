import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

export type TProductCart = {
  id: string;
  name: string;
  price: number;
  color: {
    id: string;
    name: string;
  };
  size: string;
  quantity: number;
  thumbnail?: string;
};

type UpdateType = 'increase' | 'decrease';

interface CartState {
  _hasHydrated: boolean;
  cartId: string | null;
  items: TProductCart[];
  setCartId: (_id: string) => void;
  update: (_type: UpdateType, _item: TProductCart) => void;
  remove: (_product: TProductCart) => void;
  clear: () => void;
  getTotalPrice: () => number;
  setHydration: (_value: boolean) => void;
}

const useCart = create(
  persist<CartState>(
    (set, get) => ({
      _hasHydrated: false,
      cartId: null,
      items: [],
      setCartId: (_id) => set({ cartId: _id }),
      setHydration: (_value) => set({ _hasHydrated: _value }),
      update: (type, item) => {
        switch (type) {
          case 'increase':
            const foundItem = get().items.find(
              (i) =>
                i.id === item.id &&
                item.color.id === i.color.id &&
                item.size === i.size
            );
            // If the item is already in the cart, increase the quantity
            if (foundItem) {
              set((state) => ({
                items: state.items.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
                ),
              }));
            } else {
              // If the item is not in the cart, add it
              set((state) => ({
                items: [...state.items, { ...item, quantity: 1 }],
              }));
            }
            break;
          case 'decrease':
            // If the quantity is 1, remove the item from the cart
            set((state) => {
              if (state.items.find((i) => i.id === item.id)?.quantity === 1) {
                return {
                  items: state.items.filter((i) => i.id !== item.id),
                };
              }

              return {
                items: state.items.map((i) =>
                  i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
                ),
              };
            });
            break;
        }
      },
      remove: (product) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              item.id !== product.id &&
              item.color.id !== product.color.id &&
              item.size !== product.size
          ),
        })),
      clear: () =>
        set({
          items: [],
        }),
      getTotalPrice: () =>
        get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    }),
    {
      name: 'cart',
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: (state) => {
        return () => state.setHydration(true);
      },
    }
  )
);

export default useCart;
