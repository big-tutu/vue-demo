<template>
  <div>
    Home
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      some: '1'
    }
  },
  mounted () {
    const { dispatch } = this.$store
    dispatch('fetchList')

  }
}
</script>
