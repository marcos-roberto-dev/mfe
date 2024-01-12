<template>
  <div style="border: 2px solid green">
    <JButton :variants="{ variant: 'secondary' }">Vue App</JButton>
    <MyComponent first="MFE + DS" middle="Vue" last="App"></MyComponent>
  </div>
</template>

<script>
import { MyComponent, JButton } from "@repo/vue-library";

export default {
  name: "App",
  components: {
    JButton,
    MyComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
