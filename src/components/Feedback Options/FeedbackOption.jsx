import PropTypes from "prop-types";
import { StyledBtn, StyledBtnContainer } from "./FeedBackStyled";

const FeedbackOption = ({ options, onLeaveFeedback }) => {
    return (
        <StyledBtnContainer>
            {options.map((option) => {
                return (
                    <StyledBtn
                    key={option}
                    type="button"
                    name={option}
                    onClick={onLeaveFeedback}
                >
                    {option}
                    </StyledBtn>
                )
            })}
        </StyledBtnContainer>
    );
};

export default FeedbackOption;

FeedbackOption.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};