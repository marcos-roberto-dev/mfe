import {MyComponent, JButton} from "@repo/react-library"

export default function Root(props) {
  return <section style={{border: '2px solid blue'}}>  
    <MyComponent first="MFE + DS" middle="React" last="App"></MyComponent>
    <JButton>React App</JButton>
  </section>;
}
