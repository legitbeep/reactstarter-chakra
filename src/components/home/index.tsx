import { Grid } from "@chakra-ui/react";

import CTASection from "./components/CTASection";
import ImageSection from "./components/ImageSection";
import TextSection from "./components/TextSection";

const Home = () => (
  <Grid gap={4}>
    <TextSection />
    <ImageSection />
    <CTASection />
  </Grid>
);

export default Home;
