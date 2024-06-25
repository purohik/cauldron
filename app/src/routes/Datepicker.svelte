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

</script>

<style>
  .datepicker {
    display: flex;
    justify-content: center;
  }

  .time-grid {
    display: flex;
    justify-content: center;
  }
</style>

<div class="datepicker">
  <input type="date" on:input={(e) => updateDate(e)}/>
  <button>Go</button>
</div>

{#if selectedDate !== undefined}
  <div class="time-grid">
    <Month {month} {year} />
  </div>
{/if}
