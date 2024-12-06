import { typeColors } from "../../utils/constant";
import { TypeBox, SectionTitle } from "./styled";

const TypeList = ({ types }) => (
    <>
        <SectionTitle variant="h6">Types:</SectionTitle>
        <div>
            {types.map(({ type }) => (
                <TypeBox key={type.name} $backgroundColor={typeColors[type.name.toLowerCase()]}>
                    {type.name}
                </TypeBox>
            ))}
        </div>
    </>
);

export default TypeList;
