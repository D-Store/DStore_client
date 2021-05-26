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
`;

export const CategoryItem = styled.div`
    position: relative;
    width: 100%;
    height: 180px;
    a{
        margin: 24px;
        position: absolute;
        font-size: 36px;
        font-weight: bold;
        color: #D4D4D4;
        left: 24;
        text-decoration: none;
    }
    .icon{
        width: 240px;
        height: 180px;
        z-index: -1;
        position: absolute;
        bottom: 0;
    }
`;