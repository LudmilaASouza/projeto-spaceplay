import styled from "styled-components"

export const ProdutosContainer = styled.div`
    display: flex;
    justify-content: space-between; 
    padding-top: 10px;
    flex-wrap: wrap;
`;

export const BrinquedosContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    border-radius:10px;
    text-align: center;
    padding: 10px 0;
`;

export const Imagens = styled.img `
    width: 15%;
    min-width:150px;
    padding: 10px 12px;
    border: 2px solid #F0F8FF;
    border-radius: 25px;
    cursor: pointer;
    box-shadow: 20px 20px 30px rgba(0,0,0,0.02);
    margin: 15px 0;
    transition: 0.2s ease;
`;