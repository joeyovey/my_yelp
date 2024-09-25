import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';
Amplify.configure(awsmobile);

function App() {
  return (
    <div className="App">
      <h1>Welcome to REact</h1>
    </div>
  );
}

export default withAuthenticator(App);
