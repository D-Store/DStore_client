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
    position: relative;
    @media screen and (max-width: 910px) {
        display: none;
    }
`;

export const CategoryItem = styled.div`
    position: relative;
    width: 100%;
    height: 180px;
    cursor: pointer;
    a{
        cursor: pointer;
        margin: 24px;
        position: absolute;
        font-size: 36px;
        font-weight: bold;
        color: #D4D4D4;
        left: 24;
        text-decoration: none;
    }
    .icon{
        cursor: pointer;
        width: 240px;
        height: 180px;
        z-index: -1;
        position: absolute;
    }
`;