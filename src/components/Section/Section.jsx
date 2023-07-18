import { StyledContainer } from "components/StyledContainer/StyledContainer";
import PropTypes from "prop-types";

const Section = ({ title, children }) => {
    return (
        <StyledContainer>
            <h2>{title}</h2>
            {children}
        </StyledContainer>
    );
};

export default Section;

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node,
};