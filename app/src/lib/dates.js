import {MS_IN_A_DAY} from './constants';

export function difference(date1, date2 = Date.now()) {
  const diffTime = Math.abs(date1 - date2);
  return Math.floor(diffTime / MS_IN_A_DAY);
}