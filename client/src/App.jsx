import { Route, Routes } from 'react-router-dom';
import socketIO from 'socket.io-client';
const socket = socketIO.connect('ws://127.0.0.1:4000');
//const socket = socketIO.connect('http://127.0.0.1:4000');
//ws://127.0.0.1:4000

import Home from "./components/home/home.jsx";
import ChatPage from "./components/chat/index.jsx";

function App() {

  return (
    <Routes>
        <Route path='/' element={<Home socket={socket}/>} />
        <Route path='/chat' element={<ChatPage socket={socket}/>} />
    </Routes>
  )
}

export default App
