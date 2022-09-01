import './Chat.css'
import React from 'react'

import message from '../../img/message.png'

const Chat: React.FC = () => {
  return (
    <div className="chat">
      <img src={message} alt="message" className="message" />
      <span className="chat__text">Чат</span>
    </div>
  )
}

export default Chat
