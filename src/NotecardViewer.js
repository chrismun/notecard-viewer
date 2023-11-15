import React, { useState } from 'react';
import { Box, Button, Textarea, VStack, Heading, Text } from '@chakra-ui/react';

const NotecardViewer = () => {
  const [notecards, setNotecards] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    try {
      const parsedNotecards = JSON.parse(input);
      setNotecards(parsedNotecards);
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  return (
    <VStack spacing={4}>
      <Textarea value={input} onChange={handleInputChange} placeholder="Paste JSON here" />
      <Button colorScheme="blue" onClick={handleSubmit}>Load Notecards</Button>
      {notecards.map((notecard, index) => (
        <Box key={index} p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">{notecard.title}</Heading>
          <Text mt={4}>{notecard.content}</Text>
          <Text mt={2}>Tags: {notecard.tags.join(', ')}</Text>
        </Box>
      ))}
    </VStack>
  );
};

export default NotecardViewer;
