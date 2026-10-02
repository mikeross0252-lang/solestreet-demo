import { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext()

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('solestreet-cart')) || []
    } catch {
      return []
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem('solestreet-cart', JSON.stringify(items))
    } catch {}
  }, [items])

  const addToCart = (product, size, color, qty = 1) => {
    const key = `${product.id}-${size}-${color}`
    setItems((prev) => {
      const found = prev.find((i) => i.key === key)
      if (found) {
        return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      }
      return [...prev, {
        key, id: product.id, name: product.name, price: product.price,
        image: product.image, size, color, qty,
      }]
    })
  }

  const removeFromCart = (key) => setItems((prev) => prev.filter((i) => i.key !== key))

  const updateQty = (key, qty) =>
    setItems((prev) => prev.map((i) => (i.key === key ? { ...i, qty: Math.max(1, qty) } : i)))

  const clearCart = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0)
  const count = items.reduce((sum, i) => sum + i.qty, 0)

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, updateQty, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)