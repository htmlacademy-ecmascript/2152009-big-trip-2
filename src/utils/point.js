import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import {
  HOURS_IN_DAY,
  MILLISECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
} from '../const';
const DATE_FORMAT = 'MMM D';
const HOURS_FORMAT = 'HH:mm';
const FULL_DATE_FORMAT = ' DD/MM/YY HH:mm';

dayjs.extend(duration);

function getHumanizeTaskDueDate(dueDate, format) {
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
  } else if (
    differenceInMilliseconds <
    MILLISECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY
  ) {
    return `${hours}H ${minutes}M`;
  } else {
    return `${days}D ${hours}H ${minutes}M`;
  }
}
// Future: дата начала события > текущей даты
function isPlannedPoint(dueDate){
  return dayjs(dueDate).isAfter(dayjs());
}

// Present: дата начала события <= текущей даты и дата окончания >= текущей даты
function isCurrentPoint(timeFrom, timeTo){
  const now = dayjs();
  return dayjs(timeFrom).isBefore(now) && dayjs(timeTo).isAfter(now);
}

// Past: дата окончания < текущей даты
function isPassedPoint(timeTo){
  return dayjs(timeTo).isBefore(dayjs());
}
export {
  getHumanizeTaskDueDate,
  getTimeDifference,
  DATE_FORMAT,
  HOURS_FORMAT,
  FULL_DATE_FORMAT,
  isPlannedPoint,
  isCurrentPoint,
  isPassedPoint,

};
