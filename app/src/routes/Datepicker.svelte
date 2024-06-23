<script>
  import { MONTHS } from "../lib/constants";
  import '@material/web/button/filled-tonal-button.js';

  
  let today = new Date();
  let date = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  
  // TODO: figure out how to make this dynamic based on the selected month
  let daysInCurrentMonth = new Date(year, month, 0).getDate();
  let daysInMonth = [...Array(daysInCurrentMonth).keys()].map(i => i + 1);
  let allYears = [...Array(100).keys()].map(i => year - 99 + i);

  function handleClick(selectedYear) {
    year = selectedYear;
    console.log("Selected year is " + selectedYear);
  }

</script>

<style>
  .datepicker {
    background: #ddd;
    display: flex;
  }

  .scroll {
    height: 8em;
    width: 4em;
    overflow: scroll;
  }

  .scroll::-webkit-scrollbar {
    display: none;
  }
</style>

<div class="datepicker">
  <div class="day scroll">
    {#each daysInMonth as day}
      <div>{day}</div>
    {/each}
  </div>

  <div class="scroll">
    {#each MONTHS as month}
      <div>{month}</div>
    {/each}
  </div>

  <div class="scroll">
    {#each allYears as year}
      <button on:click={() => handleClick(year)}>{year}</button>
    {/each}
  </div>
</div>