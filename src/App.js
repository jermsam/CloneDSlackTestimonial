import React from "react";
import { Box, Heading } from "grommet";
import { CMarqueClone } from "./CMarcue";
import "./styles.css";
import "./marcue.css";

export default function App() {
  return (
    <Box gap="none" align="center" justify="center">
      <Heading margin={{ bottom: "none" }} textAlign="center" level="2">
        Companies that collaborate in Slack.
      </Heading>
      <CMarqueClone />
    </Box>
  );
}
