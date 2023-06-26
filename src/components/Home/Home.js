import brinquedos from "../../brinquedos.json"
import { BrinquedosContainer, Imagens, ProdutosContainer } from "./style";

const Home = ({ cart, setCart, ordination, valueMax, valueMin, searchName}) => {
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
    <ProdutosContainer>
        {brinquedos.sort((brinquedo1,brinquedo2) => {
            return ordination === "growing" ? brinquedo1.nome.localeCompare(brinquedo2.nome) :
            brinquedo2.nome.localeCompare(brinquedo1.nome)
        }).filter((brinquedo) => {
            return valueMin ? brinquedo.valor >= valueMin : brinquedo;
        }).filter((brinquedo) => {
            return valueMax ? brinquedo.valor <= valueMax : brinquedo;
        }).filter((brinquedo) => {
            return brinquedo.nome.toLowerCase().includes(searchName.toLowerCase());
        }).map((brinquedo) => {
        return (
        <BrinquedosContainer key={brinquedo.id}>
            <Imagens src={brinquedo.imagem} alt={brinquedo.nome} />
            <p> Nome: {brinquedo.nome} </p>
            <p> Preço: R${brinquedo.valor} </p>
            <button onClick={() => addBrinquedoCart(brinquedo)}> Comprar </button>
        </BrinquedosContainer>
        );
    })}
    </ProdutosContainer>
);
};

export default Home;