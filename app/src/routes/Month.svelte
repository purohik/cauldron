<script>
  import { DAY_PLACEHOLDER, MONTHS } from '../lib/constants';
  import Day from './Day.svelte';

  export let month = 2;
  export let year = 2024;
  
  function calculateWeekFormat(month, year) {
    var weekOrder = [];
    var currentDay = 0;
    const totalDays = new Date(year, month, 0).getDate();
    const firstDate = new Date(year, month - 1, 1);
    console.log("For date", firstDate, month, year);
    var currentWeek = [];

    // Get all the placeholder in first week.
    while (currentDay < firstDate.getDay()) {
      currentWeek.push(DAY_PLACEHOLDER);
      currentDay += 1;
    }

    currentDay = 1;
    while (currentDay <= totalDays) {
      currentWeek.push(currentDay);
      currentDay += 1;

      if (currentWeek.length === 7) {
        weekOrder.push(currentWeek);
        currentWeek = [];
      }
    }

    // Fill all the placeholders in last week.
    while (currentWeek.length > 0 && currentWeek.length < 7) {
      currentWeek.push(DAY_PLACEHOLDER);
    }
    weekOrder.push(currentWeek);
    return weekOrder;
  }

  $: sortedWeeks = calculateWeekFormat(month, year);
</script>

<style>
  .vertical {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .horizontal {
    display: flex;
    border: 0.1em solid black;
    /* justify-content: space-evenly; */
    margin: 0em;
  }

  .week {
    display: flex;
    flex-direction: column;
    /* border: 1px solid black; */
  }

  .day {}

  .label {
    font-size: 0.2em;
    font-family: 'Roboto Mono';
  }
</style>

<div class="vertical">
  <span class="label">{MONTHS[month]} {year}</span>
  <div class="horizontal">
    {#each sortedWeeks as week}
      <div class="vertical week">
        {#each week as day}
          <div class="day"><Day label={day} /></div>
        {/each}
      </div>
    {/each}
  </div>
</div>