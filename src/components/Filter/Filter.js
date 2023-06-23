import { InputContainer } from "./style";

const Filter = ({ordination, setOrdination, setValueMax, setValueMin, setSearchName}) => {
    return (
        <div>
            <p>Filtro</p>
            <select value={ordination} onChange={(e) => setOrdination(e.target.value)}>
                <option value="growing">Crescente</option>
                <option value="descending">Decrescente</option>
            </select>
            <InputContainer>
                <input placeholder="Valor mínimo" type="number" onChange={(e) => setValueMin(e.target.value)}/>
                <input placeholder="Valor máximo" type="number" onChange={(e) => setValueMax(e.target.value)}/>
                <input placeholder="Busca por nome" type="text" onChange={(e) => setSearchName (e.target.value)}/>
            </InputContainer>
        </div>
    );
}

export default Filter;