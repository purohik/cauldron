<script>
  import '@material/web/button/filled-button.js';
  import {DAY_PLACEHOLDER} from '../lib/constants';

  export let label = '';
  export let date = new Date();

  let description = '';

  function onClick(e) {
    e.target.style.backgroundColor = 'red';
  }

  function getDateId() {
    return date.getFullYear() + date.getMonth() + date.getDate();
  }

  function onHover(e) {
    e.target.style.backgroundColor = 'grey';
  }

  function onMouseOut(e) {
    e.target.style.backgroundColor = 'black';
  }
</script>

<style>
  .dot {
    height: 5em;
    width: 5em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.2em;
    font-size: 0.2em;
    padding: 0%;
    border: none;
  }

  .black {
    background-color: rgba(0, 0, 0);
    color: white;

  }

  .grey {
    background-color: rgba(103, 103, 103, 0);
  }
</style>

{#if label !== DAY_PLACEHOLDER}
  <button class="black dot" on:click={(e) => onClick(e)}>{label}</button>
{:else}
  <button class="grey dot">{label}</button>
{/if}
