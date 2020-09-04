import React from "react";
import TextField from '@material-ui/core/TextField';
import { FormHelperText } from "@material-ui/core";
import './style/message-form.css'

interface Props {}

interface State {
  recipient: string | undefined
  message: string | undefined
}

class MessageForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipient: undefined,
      message: undefined
    }
  }

handleChangeRecipient = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({ recipient: event.target.value })
}

handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({ message: event.target.value })
}

render() {
  return (
    <div className="MessageForm">
      <header className='message-form-header'>Send SMS</header>
      <form  noValidate autoComplete="off">
        <div className='message-form-text-input'> 
          <TextField  
            label="Sender"
            variant="outlined"
            defaultValue="Enterprise"
            InputProps={{
              readOnly: true,
            }}
        />
        </div>
      <div className='message-form-text-input'>
        <TextField  
          required
          label="Recipient"
          variant="outlined"
          onChange={this.handleChangeRecipient}
        />
      </div>
        <div className='message-form-text-input'> 
           <TextField
            required
            label="Message"
            multiline
            placeholder="Please enter your message here"
            variant="outlined"
            className='message'
            inputProps={{
              maxLength: 480
            }}     
        />
        <FormHelperText className='message-helper-text'>
            Message length should be less or equal 480 characters 
          </FormHelperText>
        </div>
    </form>
    </div>
  );
}
};

export default MessageForm;
