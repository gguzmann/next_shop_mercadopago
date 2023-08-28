const { create } = require('zustand')

export const useCarrito = create((set, get) => ({
  items: [],
  setItems: (value) => set({ items: value }),
  total: 0,
  setTotal: (value) => set({ total: value })
}))
