export enum IconSizes {
  xs = '0.5rem',
  sm = '1rem',
  md = '1.5rem',
  lg = '2rem',
}

export enum DaysOfTheWeek {
  MON = 'Monday',
  TUE = 'Tuesday',
  WED = 'Wednesday',
  THU = 'Thursday',
  FRI = 'Friday',
  SAT = 'Saturday',
  SUN = 'Sunday',
}

export enum ShortDayNames {
  MONDAY = 'M',
  TUESDAY = 'T',
  WEDNESDAY = 'W',
  THURSDAY = 'T',
  FRIDAY = 'F',
  SATURDAY = 'S',
  SUNDAY = 'S',
}

export const OVERLAP_STEP = 8

export enum DateFormat {
  MONTH_LONG = 'LLLL',
  MONTH_SHORT = 'LLL',
  DAY_LONG = 'EEEE',
  SHORT_DAY = 'EEEEE',
  DAY_NUMBER = 'dd',
  HOUR = 'HH',
  HOUR_AND_MINUTE = 'HH:mm',
  MERIDIEM_TIME = 'hh:mm a',
  TIME_STAMP = 'h:mm aa',
  MINUTE = 'mm',
  YEAR_MONTH_DAY = 'yyyy-LLLL-dd',
  DATE = 'yyyy-MM-dd',
  DAY_OF_WEEK = 'EE',
  HOUR_MERIDIEM = 'haaa',
  DAYOFWEEK_DAY_MONTHNAME_YEAR = 'EEEE d MMMM yyyy',
  WEEKDAY_DAY_MONTH = 'EEEE, dd MMM',
}

export const DAYS_IN_YEAR = 365

export const WEEK_DAYS = 7

export const START_DAY = 0

export const END_DAY = 24

export const DAY_IN_HOURS = 24

export const daysOfWeek = Object.values(DaysOfTheWeek)

export enum MERIDIEM {
  BEFORE_MIDDAY = 'AM',
  AFTER_MIDDAY = 'PM',
}

export const MINUTES_IN_HOUR = 60

export enum Views {
  DAY = 'day',
  WEEK = 'week',
  MONTH = 'month',
}

export const ONE_MINUTE_IN_MILLISECONDS = 60 * 1000

export enum Devices {
  MOBILE = 'mobile',
  DESKTOP = 'desktop',
}

export const INDEX_OF_SUNDAY = 6

export enum ArrowDirections {
  LEFT = 'left',
  RIGHT = 'right',
}

export const MOBILE_WIDTH = 450

export const EVENT_GAP = 15
