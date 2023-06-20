import brinquedos from "../../brinquedos.json"
import { BrinquedosContainer, Imagens } from "./style";

const Home = ({ cart, setCart }) => {
    const addBrinquedoCart = (brinquedo) => {
        const brinquedoFindCart = cart.find(
            (item) => item.nome === brinquedo.nome
        );

        if(brinquedoFindCart) {
            const newCart = cart.map(item => 
                brinquedoFindCart.nome === item.nome ? 
                {...item, quantidade: item.quantidade +1} : item)
            setCart(newCart);
        } else {
            setCart([...cart,{...brinquedo, quantidade: 1}])
        }
    }; 

    console.log(cart, "cart")
return (
    <div>
        {brinquedos.map((brinquedo) => {
        return (
        <BrinquedosContainer key={brinquedo.id}>
            <Imagens src={brinquedo.imagem} alt={brinquedo.nome} />
            <p> Nome: {brinquedo.nome} </p>
            <p> Preço: R${brinquedo.valor} </p>
            <button onClick={() => addBrinquedoCart(brinquedo)}> Comprar </button>
        </BrinquedosContainer>
        );
    })}
    </div>
);
};

export default Home;