<!-- html code -->
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ moreVar }}</h2>

    <!-- v for loop -->
    <div>
      <ul>
        <li v-for="user in users">
          {{user.firstname}} {{user.lastname}}
        </li>
      </ul>
    </div>

    <div>
      <input type="text" v-model="input_val" />
    </div>

    <div>
      input_val: <div v-text="input_val"></div>
    </div>

    <button v-on:click="counter++"> {{counter}} times</button>
  </div>
</template>

<!-- javascript -->
<script>
// Export this component
export default {
  name: 'hello',
  // data is for any var inside this template
  data () {
    return {
      msg: 'Any var',
      moreVar: 'more var',
      users: [
        {firstname: 'Sebastian', lastname: 'Eschweiler'},
        {firstname: 'Bill', lastname: 'Smith'},
        {firstname: 'John', lastname: 'Porter'}
      ],
      input_val: '',
      counter: 0
    }
  }
}
</script>

<!-- add scope to style -->
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
