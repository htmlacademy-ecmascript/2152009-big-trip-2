import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { HOURS_IN_DAY,MILLISECONDS_IN_MINUTE,MINUTES_IN_HOUR } from './const';
const DATE_FORMAT = 'MMM D';
const HOURS_FORMAT = 'HH:mm';
const FULL_DATE_FORMAT = ' DD/MM/YY HH:mm';

dayjs.extend(duration);

function getRandomArrayElement(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getHumanizeTaskDueDate(dueDate,format) {
  return dueDate ? dayjs(dueDate).format(format) : '';
}

function getTimeDifference(timeFrom, timeTo) {

  const differenceInMilliseconds = dayjs(timeTo).diff(dayjs(timeFrom));
  const diffDuration = dayjs.duration(differenceInMilliseconds);

  const days = diffDuration.days();
  const hours = diffDuration.hours();
  const minutes = diffDuration.minutes();

  if (differenceInMilliseconds < MILLISECONDS_IN_MINUTE) {
    return `${minutes}M`;
  } else if (differenceInMilliseconds < MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY) {
    return `${hours}H ${minutes}M`;
  } else {
    return `${days}D ${hours}H ${minutes}M`;
  }
}
export {getRandomArrayElement,getHumanizeTaskDueDate,getTimeDifference,DATE_FORMAT,HOURS_FORMAT,FULL_DATE_FORMAT};
