import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      h={"100vh"}
      templateAreas={`"header header" "main main" `}
      gridTemplateRows={"100px 1fr"}
    >
      <GridItem pl="2" bg="gray.400" area={"header"}>
        <Header />
      </GridItem>
      <GridItem pl="2" bg="gray.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
