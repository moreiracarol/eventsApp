import { EVENTS_PATH } from "./constants";

export const getEventsList = eventsList => {
  let event = {};
  let events = [];
  eventsList.forEach(item => {
    event.name = item.name;
    event.date = getDate(item);
    event.price = getPrice(item);
    events.push(event);
    event = {};
  });
  return events;
};

export const getPrice = item => {
  const min = item.priceRanges ? item.priceRanges[0].min : 0;
  const max = item.priceRanges ? item.priceRanges[0].max : 0;
  return item.priceRanges ? `€${min} - €${max}` : "Free";
};

export const getDate = item => {
  let formattedDate = "No date informed";
  const date = new Date(
    item.dates && item.dates.start && item.dates.start.localDate
  );
  if (date) {
    let weekday = getWeekDayName(date.getDay());
    let month = getMonthName(date.getMonth());
    let day = date.getDate();
    let year = date.getFullYear();
    formattedDate = `${weekday}, ${day} ${month} ${year}`;
  }
  return formattedDate;
};

export const getWeekDayName = day => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  return days[day];
};

export const getMonthName = month => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return months[month];
};

export const isEventsPage = path => {
  return path === EVENTS_PATH;
};

export default {
  getEventsList,
  getDate,
  getPrice,
  getWeekDayName,
  getMonthName,
  isEventsPage
};
