import React from "react";
import { IMessage } from "./utils/types";
import './style/message-display.css'

interface Props {
  messages?: IMessage[]
}

const MessageDisplay = (props: Props) => {
  if(!props.messages) {
    return <div />
  }

  const messageBubbles = props.messages.map((_sms: IMessage, index: number) => {
    return (
      <div key={index} className='message-bubble'> 
      <p><b>Recipient: </b> {_sms.recipient} </p>
      <p><b>Message: </b> {_sms.message} </p>
      <p><b>Cost: </b> A${_sms.cost} </p>
    </div>
    )
  })

  return (
    <div className="MessageDisplay">
      <header className='message-display-header'>Sent SMS</header>
      <div className='messages-box'> 
        {messageBubbles}
      </div>
    </div>
  );
};

export default MessageDisplay;

