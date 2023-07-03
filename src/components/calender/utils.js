import { DAYS } from "./conts";

export const getDaysInMonth = (date) => {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
};

export const range = (end) => {
  const { result } = Array.from({ length: end }).reduce(
    ({ result, current }) => ({
      result: [...result, current],
      current: current + 1
    }),
    { result: [], current: 1 }
  );
  return result;
};

export const sortDays = (date) => {
  const dayIndex = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  const sortedDays = [...DAYS.slice(dayIndex), ...DAYS.slice(0, dayIndex)];
  return sortedDays;
};
 

// export const datesAreOnSameDay = (first, second) =>
//   first.getFullYear() === second.getFullYear() &&
//   first.getMonth() === second.getMonth() &&
//   first.getDate() === second.getDate();
  export function datesAreOnSameDay(date1, date2) {
    if (date1 === null || date2 === null) {
      return false;
    }
  
    const year1 = date1.getFullYear();
    const month1 = date1.getMonth();
    const day1 = date1.getDate();
  
    const year2 = date2.getFullYear();
    const month2 = date2.getMonth();
    const day2 = date2.getDate();
  
    return year1 === year2 && month1 === month2 && day1 === day2;
  }
  

export const getMonthYear = (date) => {
  const d = date.toDateString().split(" ");
  return `${d[1]} ${d[3]}`;
};

export const nextMonth = (date, cb) => {
  const mon = date.getMonth();
  if (mon < 11) {
    date.setMonth(mon + 1);
  } else {
    date.setMonth(0);
    date.setFullYear(date.getFullYear() + 1);
  }
  cb(new Date(date));
};

export const prevMonth = (date, cb) => {
  const month = date.getMonth();
  if (month > 0) {
    date.setMonth(month - 1);
  } else {
    date.setMonth(11);  
    date.setFullYear(date.getFullYear() - 1);
  }
  cb(new Date(date));
};

export const getDarkColor = () => {
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += Math.floor(Math.random() * 10);
  }
  return color;
};

export const getSortedDays = (date) => {
  const daysInMonth = range(getDaysInMonth(date));
  const index = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  return [...Array(index === 0 ? 6 : index - 1), ...daysInMonth];
};
