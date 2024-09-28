
const HOURS_IN_DAY = 24;
const MILLISECONDS_IN_MINUTE = 60000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const FilterType = {
  EVERYTHING:'everything',
  FUTURE:'future',
  PRESENT:'present',
  PAST:'past',
};
const TextNoPoint = {
  everything:'Click New Event to create your first point',
  present:'There are no present events now',
  past:'There are no past events now',
  future:'There are no future events now'
};
const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};
export {HOURS_IN_DAY,MILLISECONDS_IN_MINUTE,SECONDS_IN_MINUTE,MINUTES_IN_HOUR,FilterType,TextNoPoint,Mode};
