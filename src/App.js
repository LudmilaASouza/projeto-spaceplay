import Filter from "./components/Filter/Filter"
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import { AppContainer } from "./style"
import { useState } from "react"

export default function App() {
  const [cart, setCart] = useState ([]);

  return (
    <AppContainer>
      <Filter> </Filter>
      <Home cart={cart} setCart={setCart}> </Home>
      <Cart> </Cart>
    </AppContainer>
  )
}