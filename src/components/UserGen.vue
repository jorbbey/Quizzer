<template>
  <div>
    <img
      :src="picture"
      :alt="` ${firstName} ${lastName} `"
      :class="gender"
      @click="getImage"
    />
    <h1>{{ firstName }} {{ lastName }}</h1>
    <h3>Email: {{ email }}</h3>
    <UserButton @get-user="getUser" :class="gender" text="Get User" />
  </div>
</template>

<script>
import UserButton from './UserButton.vue'
export default {
  data() {
    return {
      firstName: 'Smith',
      lastName: 'Johnson',
      email: 'smithjohn@gmail.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/20.jpg',
    }
  },
  methods: {
    async getUser() {
      const res = await fetch('https://randomuser.me/api')
      const { results } = await res.json()
      this.firstName = results[0].name.first
      this.lastName = results[0].name.last
      this.email = results[0].email
      this.gender = results[0].gender
      this.picture = results[0].picture.large
    },
  },
  components: {
    UserButton,
  },
}
</script>

<style></style>
