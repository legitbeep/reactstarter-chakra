import { Box, Flex, Image, Link } from "@chakra-ui/react";

const ImageSection = () => (
  <>
    <Box textAlign="center" marginX="auto" maxWidth={[300, 400]}>
      <Image width={400} src="assets/moon.svg" />
      <Link fontSize="xs" href="https://storyset.com/rocket" isExternal>
        Rocket illustrations by Storyset
      </Link>
    </Box>
    <Flex marginY={4} justifyContent="center" alignItems="center" gridGap={2}>
      <Image src="assets/vite-logo.svg" label="vite" height={33} width={33} />
      <Image src="assets/ts-logo.svg" label="ts" height={33} width={33} />
      <Image src="assets/react-logo.svg" label="react" height={33} width={33} />
      <Image
        src="assets/chakra-ui-logo.svg"
        label="chakra-ui"
        height={33}
        width={33}
      />
    </Flex>
  </>
);

export default ImageSection;
