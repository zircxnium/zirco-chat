import { useState } from "react";
import { isTyping, sendMessage } from "react-chat-engine";
import { SendOutlined, PictureOutlined } from '@ant-design/icons';

const MessageForm = (props) => {
    const [value, setValue] = useState('');
    const { activeChat, creds, chats } = props;
    const chat = chats && chats[activeChat];
    
    const handleSubmit = e => {
        e.preventDefault();

        const text = value.trim();
        if (text.length > 0) sendMessage(creds, activeChat, { text });
        setValue('');
    }

    const handleChange = e => {
        setValue(e.target.value);
        isTyping(props, activeChat);
    }

    const handleUpload = e => {
        sendMessage(creds, activeChat, {files: e.target.files, text:'' });
    }

    return (
        <div>
            <form className="message-form" onSubmit={handleSubmit}>
                <input
                    className="message-input"
                    placeholder={`Message ${chat?.title}`}
                    value={value}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                />
                <label htmlFor="upload-button">
                    <span className="image-button">
                        <PictureOutlined className="picture-icon" />
                    </span>
                </label>
                <input type="file" multiple={false} id="upload-button" style={{ display: 'none' }} onChange={handleUpload} />
                <button type="submit" className="send-button">
                    <SendOutlined className="send-icon" />
                </button>
            </form>
        </div>
    );
};

export default MessageForm;