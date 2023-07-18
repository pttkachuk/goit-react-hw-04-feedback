import PropTypes from "prop-types";
import { NotiMessage } from "./NotificationStyled";

const Notification = ({ message }) => {
    return (
        <NotiMessage>{message}</NotiMessage>
    );
};

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};