import styled from "styled-components"

export const InputContainer = styled.div `
    display: flex;
    
    flex-direction: row;
    p{
        margin: 15px;
    }
    input{
        margin: 15px;
        text-align: center;
    }
`
export const FilterContainer = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    background: #F0F8FF;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.06);
    text-align: center;
    z-index: 999;
    margin: 10px;
    select{
        width: 115px;
        height: 25px;
        justify-content: center; 
        margin: 15px;
    }
    p {
        margin-left: 30px; 
    }
`

export const Button = styled.button`
    margin-right:30px;
    width: 50px;
    height: 25px;
    margin: 15px; 
    
`
