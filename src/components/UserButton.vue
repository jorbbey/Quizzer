<template>
  <button @click="$emit('get-user')">{{ text }}</button> 
</template>

<script>
export default {
     name: 'UserButton',
          methods: {
      getImage() {
          this.picture = this.results[0].picture.extraLarge
      }
          },
          props: {
               text: String
          },
          emits:['get-user']
}
</script>

<style>

</style>