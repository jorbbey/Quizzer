<template>
  <UserGen />
</template>

<script>
import UserGen from './components/UserGen.vue'

export default {
  name: 'App',
  components: {
    UserGen
  }
}
</script>


<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html,body{
      font-family: Arial, Helvetica, sans-serif;
  }

  #app {
    width: 400px;
    height: 100vh;
    margin: auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h1, h3 {
    margin-bottom: 1rem;
    font-weight: normal;
  }

  img{
    border-radius: 50%;
    border: 5px #333 solid;
    margin-bottom: 1rem;
  }

  .male{
    border-color: green;
    background: green;
  }

  .female{
    border-color: deeppink;
    background: deeppink;
  }

  button{
    cursor: pointer;
    display: inline-block;
    background: #333;
    color: white;
    font-size: 18px;
    border: 0;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    transition: .5s;
  }
  button:focus{
    outline: none;
  }

  button:hover{
    transform: scale(0.98);
  }
</style>
