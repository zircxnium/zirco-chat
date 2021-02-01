import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return (
        <ChatEngine
        height="100vh"
        projectID="7a2e4e9d-c5c5-4859-b4cc-40c5c3dbe27e"
        userName="zirconiium"
        userSecret="Test123"
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      />
    );
};

export default App;