import { Button, FilterContainer, InputContainer } from "./style";

const Filter = ({ordination, setOrdination, setValueMax, setValueMin, setSearchName}) => {
    const filterCleaner = () => {
        setSearchName("")
        setValueMax(Infinity)
        setValueMin(-Infinity)
        setOrdination("asc")
    }

    return (
        <FilterContainer>
            <p>Ordernar por:</p>
            <select value={ordination} onChange={(e) => setOrdination(e.target.value)}>
                <option value="growing">Crescente</option>
                <option value="descending">Decrescente</option>
            </select>
            <InputContainer>
                <p>Preço:</p>
                <input placeholder="Valor mínimo" type="number" onChange={(e) => setValueMin(e.target.value)}/>
                <input placeholder="Valor máximo" type="number" onChange={(e) => setValueMax(e.target.value)}/>
                <p>Brinquedo:</p>
                <input placeholder="Buscar por nome" type="text" onChange={(e) => setSearchName (e.target.value)}/>
            </InputContainer>

            <Button onClick={filterCleaner}>Voltar</Button>
        </FilterContainer>
    );
}

export default Filter;