import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';

const App = () => {
    if (!localStorage.getItem('username')) return <LoginForm />

    return (
        <ChatEngine
        height="100vh"
        projectID="7a2e4e9d-c5c5-4859-b4cc-40c5c3dbe27e"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={chatAppProps => <ChatFeed {...chatAppProps} />}
      />
    );
};

export default App;