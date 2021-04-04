import React, { Component } from "react";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";

const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// 1. Create a client engine instance
const engine = new Styletron();

import { Div, StyleReset, ThemeProvider, Text, Button, Checkbox, Switch } from "atomize";

const theme = {
  colors: {
    black900: "#1d1d1e"
  }
};

const card = (group, count, age) => (<Div bg="white" shadow="5" rounded="xl" m={{ b: "1rem", t: "10rem"}} p="1.5rem" w="45vw">
                <Div
                  border={{ b: "1px solid" }}
                  borderColor="gray300"
                  p={{ b: "0.75rem" }}
                >
                  <Text textSize="title" textWeight="500">
                    Group {group}
                  </Text>
                  <Text textSize="caption" textColor="light">
                    per month
                  </Text>
                </Div>
                <Div d="flex" justify="space-between" p={{ t: "1rem", b: "1.5rem" }}>
                  <Div>
                    <Text textSize="caption" textColor="dark">
                      Total users
                    </Text>
                    <Text textSize="caption" textColor="light">
                      {count}
                    </Text>
                  </Div>
                  <Div>
                    <Button bg="purple" rounded="xl" m={{r: '1rem'}}>
                      <Text textSize="subtitle" textWeight="500">See stats</Text>
                    </Button>
                  </Div>
                </Div>
                <Div d="flex" justify="space-between" m={{b: "1.5rem"}}>
                  <Text textSize="subtitle" textWeight="500">
                    Only for Mobile
                  </Text>
                  <Switch checked></Switch>
                </Div>
                <Div d="flex" justify="space-between">
                  <Text textSize="subtitle" textWeight="500">
                    Age group
                  </Text>
                  <Text textSize="subtitle" textWeight="400" m={{r: "1rem"}}>
                    {age} - {age + 15}
                  </Text>
                </Div>
              </Div>)



class App extends Component {
  render() {
    return (
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
        <ThemeProvider theme={theme}>
          <StyleReset />
          <Div bg="purple" w="100vw" h="10vh">
            <Div p={{t:'2rem', l: '2rem'}}>
              <Text textSize="title" textWeight="500" textColor="white">
                UXPanel
              </Text>
            </Div>
          </Div>
          <Div d="flex" justify="space-evenly" align="center">
          {card("A", 350, 12)}
          {card("B", 400, 15)}

          </Div>
        </ThemeProvider>
      </StyletronProvider>
    );
  }
}

export default App;
