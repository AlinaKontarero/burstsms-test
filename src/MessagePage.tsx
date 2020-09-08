import React from "react";

import MessageDisplay, { IMessage } from "./MessageDisplay";
import MessageForm, { IMessageData } from "./MessageForm";
import { sendSMS } from "./service";

interface State {
  messages?: IMessage[]
}


class MessagePage extends React.Component<{}, State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props)
    this.state = { messages: undefined }
  }
 private myCallback = async (messageData: IMessageData) => {
    // const resp = 
    await sendSMS(messageData.sender, messageData.recipient, messageData.message)
    this.setState({messages: this.messages})
  }  

  messages: IMessage[] = [
    {recipient: 'Alina', message: 'Hi how are you?', cost: 0.15},
    {recipient: 'Alex', message: 'Here is a simple test of your understanding of React components', cost: 0.20}
  ]
  public render() {


  return (
    <div className="MessagePage">
      <MessageForm 
        callbackFromParent={this.myCallback}
      />
      <MessageDisplay
        messages={this.state.messages}
      />
    </div>
  );
}
};

export default MessagePage;
