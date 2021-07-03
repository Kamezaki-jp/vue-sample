<template>
<!-- ルートの要素は１つでないとエラーが出る -->
<!-- divで囲って１つにしたりする -->
<div>
  <p>いいね（{{number}}）</p>
  <button @click="increment">+1</button>
</div>
</template>

<script>
  export default { 
    // data: function () {}
    data() {
      return {
        number: 5
      }
    },
    methods: {
      increment() {
        this.number += 1;
      }
    }
  }
</script>

<style>

</style>