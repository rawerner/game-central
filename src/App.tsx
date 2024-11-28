import { Grid, GridItem } from "@chakra-ui/react"
import { Show } from '@chakra-ui/react'
import { NavBar } from "./components/NavBar"

function App() {
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`,
  }}>
    <GridItem gridArea="nav">
      <NavBar />
    </GridItem>
    <Show above="lg">
        <GridItem gridArea="aside" bg="papayawhip">
        Aside
        </GridItem>
    </Show>
    <GridItem gridArea="main" bg="lightblue">
      Main
    </GridItem>
  </Grid>

}
export default App
