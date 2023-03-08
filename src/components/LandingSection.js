import React from "react";
import { Avatar, Heading, VStack, Text, Wrap, Center } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
      
    >
    <main>
      <VStack justify='center'>
        <Avatar size="2xl" src="https://i.pravatar.cc/150?img=7" />
        <Text as='b'>{greeting}</Text>
      <br/><br/>
      <Text as='b' fontSize='4xl'>{bio1}</Text>
      <Text as='b' fontSize='4xl'>{bio2}</Text>
      </VStack>
    </main>
    

    </FullScreenSection>

)
}
;

export default LandingSection;
