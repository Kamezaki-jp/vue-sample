<template>
<div>
  <LikeHeader></LikeHeader>
  <h2>{{ number }}</h2>
  <LikeNumber v-bind:totalNumber="number"></LikeNumber>
  <LikeNumber :total-number="number"></LikeNumber>
</div>
</template>

<script>
// ローカル登録
import LikeHeader from "./components/LikeHeader.vue"

export default {
  data () {
    return {
      number: 10
    }
  },
  components: {
    // LikeHeader: LikeHeader
    LikeHeader
  }
}
</script>
