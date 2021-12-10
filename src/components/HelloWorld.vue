<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="input-container">
      <wb-input-control class="input">
        <wb-input>
          <label>E-mail address</label>
          <input type="email" value="harry-james@potter.com" />
        </wb-input>
      </wb-input-control>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: false,
    },
  },
  setup() {
    const printMsg = (msg: string) => console.log(`The message is: ${msg}`);

    return {
      printMsg,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: var(--wb-green-50);
}

.input-container {
  display: flex;
  flex-flow: row;
  justify-content: center;
  height: 10rem;
  align-items: center;
  & .input {
    flex: 0 1 50%;
  }
}
</style>
