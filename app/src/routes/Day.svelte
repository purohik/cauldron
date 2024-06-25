<script>
  import '@material/web/button/filled-button.js';

  export let label = '';

  function onclick(e) {
    e.target.style.backgroundColor = 'red';
  }
</script>

<style>
  .black-dot {
    background-color: rgba(0, 0, 0);
    height: 5em;
    width: 5em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.1em;
    font-size: 0.2em;
    padding: 0%;
    color: white;
    border: none;
  }

  .grey-dot {
    background-color: rgba(103, 103, 103, 0.238);
    height: 5em;
    width: 5em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.1em;
    font-size: 0.2em;
    padding: 0%;
    color: white;
    border: none;
  }
</style>

{#if label !== ''}
  <button class="black-dot" on:click={(e) => onclick(e)}>{label}</button>
{:else}
  <button class="grey-dot">{label}</button>
{/if}
