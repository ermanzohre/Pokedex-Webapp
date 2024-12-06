import styled from "styled-components";

export const PokemonTypeListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 40px;
    justify-content: center;
`;

export const PokemonTypeBox = styled.div`
    background-color: ${(props) => props.$backgroundColor || "#f0f0f0"};
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    text-align: center;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.1);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    }

    font-weight: bold;
    font-size: 14px;
`;
