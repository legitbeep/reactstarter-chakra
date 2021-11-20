import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="100%"
      align="center"
      justifyContent="center"
      alignSelf="flex-end"
    >
      <Text fontSize="sm" sx={{ marginRight: "4px" }}>
        {" "}
        Created with ❤ by
      </Text>
      <Link href="https://github.com/legitbeep">beep</Link>
    </Flex>
  );
};

export default Footer;
