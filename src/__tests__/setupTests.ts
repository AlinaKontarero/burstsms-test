// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import ReactDOM, { render } from 'react-dom';
import MessagePage from '../MessagePage';
import App from '../App';

// Needs to overwrite a script for Windows 10 Pro 

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App> </App>, div);
  ReactDOM.unmountComponentAtNode("div");
});

it("renders the Message Page correctly", () => {
  const div = document.createElement('div');
  const { getByTestId } = render(<MessagePage />, div);
  expect(getByTestId('message-page')).toBeInTheDOM()
})

