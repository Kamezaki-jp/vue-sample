<template>
<!-- ルートの要素は１つでないとエラーが出る -->
<!-- divで囲って１つにしたりする -->
<div>
  <p>いいね（{{ halfNumber }}）</p>
  <button @click="increment">+1</button>
</div>
</template>

<script>
  export default { 
    props: {
      // バリデーション（型の指定、オブジェクトとしても指定できる）
      totalNumber: {
        type: Number,
        // required 必須項目
        required: true,
      }
    },
    computed: {
      halfNumber () {
        return this.totalNumber / 2;
      }
    },
    methods: {
      increment() {
        this.number += 1;
      }
    }
  }
</script>

<style scoped>
  div {
    border: 1px red solid
  }
</style>