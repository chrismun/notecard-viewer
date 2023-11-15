import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import NotecardViewer from './NotecardViewer';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <h1>Notecard Viewer</h1>
        <NotecardViewer />
      </div>
    </ChakraProvider>
  );
}

export default App;
