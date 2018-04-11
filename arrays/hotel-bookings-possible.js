// A hotel manager has to process N advance bookings of rooms for the next season. His hotel has K rooms.
// Bookings contain an arrival date and a departure date. He wants to find out whether there are enough
// rooms in the hotel to satisfy the demand. Write a program that solves this problem in time O(N log N).

const hotel = (arrivals, departures, k) => {
  let guests = 0;

  arrivals.sort((a, b) => a - b);
  departures.sort((a, b) => a - b);

  while (arrivals.length && departures.length) {
    if (arrivals[0] < departures[0]) {
      arrivals.shilt();
      guests++;
    } else {
      departures.shilt();
      guests--;
    }

    if (guests > k) return 0;
  }

  return 1;
};