import './Chat.css'
import React from 'react'

import message from '../../../assets/img/message.png'

export const Chat: React.FC = () => {
  return (
    <div className="chat">
      <img src={message} alt="message" className="message" />
      <span className="chat__text">Чат</span>
    </div>
  )
}
