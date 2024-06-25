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
