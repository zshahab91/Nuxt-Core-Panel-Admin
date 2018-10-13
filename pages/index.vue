<template>
  <div class="animated fadeIn">
    <button @click="getToken">click me for get token</button>
  </div>
</template>

<script>
import { Callout } from '~/components/'

export default {
  name: 'dashboard',
  components: {},
  data: function () {
    return {}
  },
  methods: {
    getToken() {
      console.log('method get Token this.$store is:', this.$store)
      let obj = {
        username: 'zahra',
        pass: '123'
      }
      this.$store.dispatch({
        type: 'user/login',
        method: 'method',
        user: obj
      })
    }
  }
}
</script>
