import React from "react";
import TextField from '@material-ui/core/TextField';
import { FormHelperText, Button } from "@material-ui/core";
import './style/message-form.css'
import { ISentMessage } from "./utils/types";

interface Props {
  getInputData: (inputData: ISentMessage) => void
}

interface State {
  recipient?: string
  message?: string
}

class MessageForm extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipient: undefined,
      message: undefined
    }
  }

private handleChangeRecipient = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({ recipient: event.target.value })
}

private handleChangeMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
  this.setState({ message: event.target.value })
}

private handleClick = () => {
  this.props.getInputData({
    sender: "Enterprise",
    recipient: this.state.recipient!,
    message: this.state.message!
  })
}

private getFormValidity = (): boolean => {
  if(!this.state.recipient || !this.state.message) {
    return false
  } else if(this.state.message && this.state.message.length > 480) {
    return false
  } else return true
}

render() {
  const formIsValid = () => this.getFormValidity()
  return (
    <div className="MessageForm">
      <header className='message-form-header'>Send SMS</header>
      <form autoComplete="off" >
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
          placeholder='614...'
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
            error={(this.state.message && this.state.message.length > 480) ? true : false}  
            onChange={this.handleChangeMessage}
        />
        <FormHelperText className='message-helper-text'>
            Message length should be less or equal 480 characters 
          </FormHelperText>
        </div>
          </form>
        <div className='message-form-text-input'> 
          <Button 
            variant="contained" 
            color="primary"
            disabled={!formIsValid()}
            onClick={this.handleClick}
          > Submit </Button>

        </div>
    
    </div>
  );
}
};

export default MessageForm;
