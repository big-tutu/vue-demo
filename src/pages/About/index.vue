<template>
  <div>
    about
    <el-button type="primary" @click="addOne">+1</el-button>
    <div>count： {{count}}</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  computed: {
    count () {
      return this.$store.state.about.count
    }
  },
  mounted () {
    const {dispatch} = this.$store
    // eslint-disable-next-line
    console.log(this.$store)
    
    dispatch('home/doSomething')
  },
  methods: {
    addOne: function () {
      const {count, $store:{dispatch} } = this
      dispatch('fetchList', {count: count + 1})
    }
  }
}
</script>
