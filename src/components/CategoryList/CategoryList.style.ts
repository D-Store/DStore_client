import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const CategoryContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const CategoryContent = styled.div`
    width: 1200px;
    height: 200px ;
    display:grid ;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 50px;
`;

export const CategoryItem = styled.div`
    width: 100%;
    height: 180px;
    padding: 24px;
    background-color: #333333;
    border-radius: 2rem;
    a{
        font-size: 36px;
        font-weight: bold;
        color: #D4D4D4;
        text-decoration: none;
    }
    .icon{
        width: 10px;
        height: 10px;
    }
`;