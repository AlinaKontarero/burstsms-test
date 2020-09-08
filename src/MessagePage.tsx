import React from "react";
import { sendSMS } from "./service";
import { IMessage, ISentMessage } from "./utils/types";
import MessageForm from "./MessageForm";
import MessageDisplay from "./MessageDisplay";

interface State {
  messagesArray: IMessage[]
  message?: IMessage
}

class MessagePage extends React.Component<{}, State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props)
    this.state = { message: undefined, messagesArray: [] }
  }

  private getData = async (messageData: ISentMessage)  => {
    await sendSMS(messageData.sender, messageData.recipient, messageData.message)
    .then(response => response.json())
    .then(result => {
      this.setState({ message: {
        cost: result.sms.cost,
        recipient: result.sms.recipient,
        message: result.sms.message
      }}
      )
    })
    .then(() => {
      if(this.state.message) {
        this.setState({ messagesArray: [...this.state.messagesArray, this.state.message ] })
      }
    })
  }  

  public render() {
    return (
    <div className="MessagePage" data-testid='message-page'>
      <MessageForm 
        getInputData={this.getData}
      />
      <MessageDisplay
        messages={this.state.messagesArray}
      />
    </div>
  );
  }
};

export default MessagePage;
