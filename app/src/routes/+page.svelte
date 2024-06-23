<script>
  import '@material/web/button/outlined-button.js';
  import Datepicker from './Datepicker.svelte';
  import {MONTHS} from '../lib/constants.js';
  import * as Dates from '../lib/dates.js';

  let selectedDate = new Date();

  $: date = selectedDate.getDate();
  $: month = selectedDate.getMonth();
  $: monthName = MONTHS[month];
  $: year =  selectedDate.getFullYear();
  $: daysPassed = Dates.difference(selectedDate);

  function updateDate(unit, magnitude) {
    console.log("Updating date with " + unit + magnitude);
    switch (unit) {
      case 'day':
        selectedDate.setDate(selectedDate.getDate() + magnitude);
        break;
      case 'month':
        selectedDate.setMonth(selectedDate.getMonth() + magnitude);
        break;
      case 'year':
        selectedDate.setFullYear(selectedDate.getFullYear() + magnitude);
        break;
      default:
        console.log("Invalid unit for dates :/");
    }
    selectedDate = new Date(selectedDate);
  }
</script>

<Datepicker />

<!-- <div>
  <md-outlined-button on:click={() => updateDate('day', -1)}> - </md-outlined-button>
  <span>{date}</span>
  <md-outlined-button on:click={() => updateDate('day', 1)}> + </md-outlined-button>
</div>

<div>
  <md-outlined-button on:click={() => updateDate('month', -1)}> - </md-outlined-button>
  <span>{monthName}</span>
  <md-outlined-button on:click={() => updateDate('month', 1)}> + </md-outlined-button>
</div>

<div>
  <md-outlined-button on:click={() => updateDate('year', -1)}> - </md-outlined-button>
  <span>{year}</span>
  <md-outlined-button on:click={() => updateDate('year', 1)}> + </md-outlined-button>
</div>

<div>
  <span>Total days passed: {daysPassed}</span>
</div>
<div>
  <md-outlined-button>Go</md-outlined-button>
</div> -->