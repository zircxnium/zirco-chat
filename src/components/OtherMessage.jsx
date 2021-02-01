const OtherMessage = ({ lastMessage, message }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username;

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div className="message-avatar" style={{ backgroundImage: `url(${message?.sender?.avatar})` }}/>
            )}
            {message?.attachments?.length > 0 ? (
                <img src={message.attachments[0].file} alt="message-attachment" className="message-image" />
            ) : (
                <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC' }}>
                    {message.text}
                </div>
            )}
        </div>
    );
};

export default OtherMessage;