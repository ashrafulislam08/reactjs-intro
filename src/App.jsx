import { useState } from 'react';
import Button from './components/Button';
function App() {
  return (
    <>
      <h3>Programming is fun</h3>
      <p>But eating error is not fun</p>
      <Button name="Log In" />
      <Button name="Sing Up" />
      <Button name="Log out" />
    </>
  );
}

export default App;
