import { TextField, Card } from "@mui/material";
import styled from "styled-components";

export const StyledSearchContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 16px;
`;

export const StyledTextField = styled(TextField)`
    && {
        margin-bottom: 10px;
    }
`;

export const StyledCard = styled(Card)`
  && {
    cursor: pointer
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    }
  }
`;
