import Filter from "./components/Filter/Filter"
import Home from "./components/Home/Home"
import Cart from "./components/Cart/Cart"
import { AppContainer, Container } from "./style"
import { useEffect, useState } from "react"

export default function App() {
  const [cart, setCart] = useState ([]);
  const [ordination, setOrdination] = useState ("growing");
  const [valueMax, setValueMax] = useState(0);
  const [valueMin, setValueMin] = useState(0);
  const [searchName, setSearchName] = useState("");
  
  useEffect(() => {
    if (cart.length > 0){
      localStorage.setItem("cart", JSON.stringify(cart))
    } 
  }, [cart]);

  useEffect(() => {
    const cartLocalStorage = localStorage.getItem("cart")
    if(cartLocalStorage){
      setCart(JSON.parse(cartLocalStorage));
    }
  }, [])

  return (
    <AppContainer>
      <Filter ordination={ordination} setOrdination={setOrdination}
      setValueMax={setValueMax} setValueMin={setValueMin}
      setSearchName={setSearchName}> </Filter>
      <h1>Coleção de brinquedos - Missão Espacial ZX-22</h1>
      <Container>        
        <Home cart={cart} setCart={setCart} ordination={ordination}
        valueMax={valueMax} valueMin={valueMin} searchName={searchName}> </Home>
        <Cart cart={cart} setCart={setCart}> </Cart>
      </Container>
    </AppContainer>
  )
}