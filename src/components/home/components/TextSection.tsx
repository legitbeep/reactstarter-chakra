import { Box, Heading, Icon, Text } from "@chakra-ui/react";
import { CgSmileMouthOpen } from "react-icons/cg";

const TextSection = () => (
  <Box textAlign="center">
    <Heading textAlign="center">
      Hello <Icon as={CgSmileMouthOpen} />
    </Heading>
    <Text>
      This is a react template with Chakra UI and typescript using Vite
      template.
    </Text>
  </Box>
);

export default TextSection;
