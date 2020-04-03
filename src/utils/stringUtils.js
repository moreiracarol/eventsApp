import { EVENTS_PATH } from "./constants";

export const getEventsList = eventsList => {
  let event = {};
  let events = [];
  eventsList.forEach(item => {
    event.name = item.name;
    event.date = item.dates;
    event.price = getPrice(item);
    event.id = item.id;
    event.favorite = false;
    event.image = item.images[0].url;
    event.url = item.url;
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

export const isEventsPage = path => {
  return path === EVENTS_PATH;
};

export const getImageContext = icon => {
  const images = require.context("../../public/images", false, /\.png$/);
  return images(`./${icon}.png`);
};

export default {
  getEventsList,
  getPrice,
  isEventsPage,
  getImageContext
};
