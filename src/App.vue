<template>
  <div id="app">
    <div class="flex">
      <div><textarea name="" id="" cols="30" rows="10" v-model="text"></textarea></div>
      <div>{{formatedTextObject}}</div>
      <button @click="transformTextToObject(text)">ok</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      text: "",
      formatedTextObject: null
    };
  },
  methods: {
    transformTextToObject(data) {
      data = this.sanitizeData(data);
      this.formatedTextObject =
        data
          .split("\n")
          .map(paragraph => paragraph.match(/([\S\s]+?)[.!?]/g))
          .map(paragraph =>
            paragraph.map(sentence => {
              const regex = new RegExp(/[.|?|!]/g);
              const sSplit = sentence
                .split(regex)[0]
                .replace(",", " ,")
                .replace(":", " :")
                .replace(";", " ;")
                .replace(")", " )")
                .replace("(", "( ")
                .split(" ");
              sSplit.push(sentence.match(regex)[0]);
              return sSplit.filter(s => !!s).map(s => s);
            })
          ) || 0;
    },
    sanitizeData(data) {
      return !data.match(/([\S\s]+?)[.!?]/g) ? (data += ".") : data;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
