import PropTypes from "prop-types";
import { StyledImpStats, StyledPosStats, StyledStats } from "./StatisticsStyled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <StyledStats>Good: {good}</StyledStats>
            <StyledStats>Neutral: {neutral}</StyledStats>
            <StyledStats>Bad: {bad}</StyledStats>
            <StyledImpStats>Total: {total}</StyledImpStats>
            <StyledPosStats>Positive feedback: {positivePercentage}%</StyledPosStats>
        </>
    )
};

export default Statistics;

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};