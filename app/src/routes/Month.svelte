<script>
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
      currentWeek.push('');
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
      currentWeek.push('');
    }
    weekOrder.push(currentWeek);
    return weekOrder;
  }

  $: sortedWeeks = calculateWeekFormat(month, year);
</script>

<style>
  .month {
    display: flex;
    border: 1px solid red;
  }

  .week {
    display: flex;
    flex-direction: column;
    border: 1px solid black;
  }

  .day {}
</style>

<div class="month">
  {#each sortedWeeks as week}
    <div class="week">
      {#each week as day}
        <div class="day"><Day label={day} /></div>
      {/each}
    </div>
  {/each}
</div>