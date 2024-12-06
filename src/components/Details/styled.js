import styled from "styled-components";
import { Box, Button, Typography, Grid2 } from "@mui/material";

export const DetailsContainer = styled(Box)`
    max-width: 900px;
    margin: auto;
    padding: 24px;
    background-color: #f7f9fc;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
`;

export const BackButton = styled(Button)`
    align-self: flex-start;
    margin-bottom: 16px;
    width: auto;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const PokemonName = styled(Typography)`
    margin-bottom: 16px;
    text-align: center;
    color: #333;
    text-transform: capitalize;
`;

export const TypeBox = styled(Box)`
    background-color: ${(props) => props.$backgroundColor || "#ccc"};
    color: white;
    padding: 8px 16px;
    border-radius: 8px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    display: inline-block;
    margin-right: 8px;
    margin-bottom: 16px;
    text-transform: capitalize;
`;

export const SectionTitle = styled(Typography)`
    margin-bottom: 16px;
    color: #555;
    font-weight: bold;
`;

export const StyledGrid = styled(Grid2)`
    display: flex;
    justify-content: space-between;
`;

export const MoveBox = styled.div`
    padding: 16px;
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: capitalize;
    @media (max-width: 600px) {
        padding: 8px;
    }
`;

export const MoveName = styled(Typography)`
    font-weight: bold;
    color: #333;
`;
