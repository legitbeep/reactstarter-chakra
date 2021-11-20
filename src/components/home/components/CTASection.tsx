import { Box, Button, Flex, Image, Link } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

const CTASection = () => (
  <Box textAlign="center">
    <Link
      _hover={undefined}
      href="https://github.com/legitbeep/reactstarter-chakra"
    >
      <Button leftIcon={<AiFillGithub />}>Open in Github</Button>
    </Link>
    <Flex marginY={4} justifyContent="center" gridGap={2}>
      <Link
        aria-label="Deploy to vercel"
        isExternal
        href="https://vercel.com/import/git?s=https://github.com/legitbeep/reactstarter-chakra"
      >
        <Image src="https://vercel.com/button" alt="vercel deploy button" />
      </Link>
    </Flex>
  </Box>
);

export default CTASection;
