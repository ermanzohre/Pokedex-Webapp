import styled from "styled-components";
import { Card, Box, Typography } from "@mui/material";

export const StyledPokemonListContainer = styled(Box)`
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    justify-content: center;
`;

export const StyledPokemonCard = styled(Card)`
    width: 200px;
    cursor: pointer;
    border-radius: 8px;
    transition: transform 0.2s, box-shadow 0.2s;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    @media (max-width: 600px) {
        width: 44%;
    }
`;

export const StyledPokemonName = styled(Typography)`
    text-align: center;
    color: #333;
    font-weight: bold;
    text-transform: capitalize;
    @media (max-width: 600px) {
       font-weight: normal;
    }
`;

export const StyledMessage = styled(Typography)`
    margin-top: 32px;
    text-align: center;
    color: ${({ color }) => (color === "error" ? "#f44336" : "#6c757d")};
    font-size: 1.2rem;
    font-weight: 500;
`;
