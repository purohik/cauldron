<script>
  import '@material/web/button/outlined-button.js';
  import Datepicker from './Datepicker.svelte';

</script>

<style>
  .app {
    display: flex;
  }

  .datepicker {
    width: 80%;
  }

  .text {
    width: 20%
  }
</style>

<div class="app">
  <div class="datepicker">
    <Datepicker />
  </div>
  <div class="text">
  </div>
</div>
