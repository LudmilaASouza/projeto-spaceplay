import { CartContainer } from "./style";

const Cart = ({cart, setCart}) => {
    
    const removeCart = (brinquedo) => {
        const newCart = cart.map((item) => 
            item.nome === brinquedo.nome ? 
            {...item, quantidade: item.quantidade - 1} : item
        ).filter((item) => item.quantidade > 0)
        setCart(newCart);
    }

    const total = cart.reduce((acumulador, brinquedo) => {
        return acumulador + brinquedo.valor * brinquedo.quantidade;
    }, 0)

    return (
        <CartContainer>
            <p>Carrinho:</p>
            {cart.map((item) => {
                return (
                    <div key={item.id}>
                    <p>{item.nome}</p>
                    <p>Quantidade: {item.quantidade}</p>
                    <button onClick={() => removeCart(item)}>Remover</button>
                    </div>
                )
            })}
            <p>Valor total: R${total}</p>
        </CartContainer>
    );
}

export default Cart;