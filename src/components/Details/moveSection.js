import { Gauge } from "@mui/x-charts";
import { StyledGrid, MoveBox, MoveName, SectionTitle } from "./styled";

const MoveList = ({ moves }) => (
    <>
        <SectionTitle variant="h6">Moves</SectionTitle>
        <StyledGrid container spacing={2}>
            {moves
                .filter(({ move }) => move?.accuracy !== null)
                .map(({ move }, index) => (
                    <StyledGrid item xs={12} sm={6} md={4} key={`${move?.name}-${index}`}>
                        <MoveBox>
                            <MoveName>{move?.name}</MoveName>
                            <Gauge
                                value={move.accuracy}
                                valueMax={100}
                                thickness={10}
                                label={`${move.accuracy}%`}
                                sx={{ width: 120, height: 120 }}
                                startAngle={-100}
                                endAngle={100}
                                text={({ value, valueMax }) => `${value} / ${valueMax}`}
                            />
                        </MoveBox>
                    </StyledGrid>
                ))}
        </StyledGrid>
    </>
);

export default MoveList;
