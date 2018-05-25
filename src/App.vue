<template>
  <div id="app">
    <div class="flex">
      <div>
        <div v-for="(p, i) in formatedTextObject" :key="i" class="paragraph">
          <div v-for="(s,i) in p" :key="i" class="sentence">
            <span v-for="(w, i) in s" :key="i" :class="w.type || 'default'">{{w.value || w}}</span>
          </div>
        </div>
      </div>
      <div>
        <textarea v-model="text" name="text" id="" cols="30" rows="10" @input="transformTextToObject(text)"></textarea>    
      </div>
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
  color: #2c3e50;
  margin-top: 60px;
  line-height: 2.44rem;
}
div.paragraph {
  margin: 0 0 0.5em 0;
}
div.sentence {
  display: inline-block;
}
span {
  background: #ececec;
  margin: 0 0.1em;
  padding: 0.1rem 0.3rem;
  border-radius: 3px;
}
span.article {
  background: green;
  color: white;
}
</style>
