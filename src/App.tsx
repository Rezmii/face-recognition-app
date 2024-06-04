import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      h={"100vh"}
      templateAreas={`"header header" "main main" `}
      gridTemplateRows={"15% 1fr"}
    >
      <GridItem pl="2" bg="orange.300" area={"header"}>
        Header
      </GridItem>
      <GridItem pl="2" bg="green.300" area={"main"}>
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
