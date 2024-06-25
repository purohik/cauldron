<script>
  import { Day } from '../classes/day';
  import Month from './Month.svelte';

  let selectedDate = undefined;
  let month;
  let year;

  function updateDate(e) {
    selectedDate = new Date(e.target.value);
    month = selectedDate.getMonth() + 1;
    year = selectedDate.getFullYear();
    console.log("Updated month and year", month, year);
  }

  $: years = [2022, 2023, 2024];
  $: months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
</script>

<style>
  .datepicker {
    display: flex;
    justify-content: center;
  }

  .time-grid {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
</style>

<div class="datepicker">
  <input type="date" on:input={(e) => updateDate(e)}/>
  <button>Go</button>
</div>

{#if selectedDate !== undefined}
  <div class="time-grid">
    {#each years as year}
      {#each months as month}
        <Month {month} {year} />
      {/each}
    {/each}
  </div>
{/if}
