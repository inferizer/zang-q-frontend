export const hdlAddSeat = (seat, setSeat, maxSeat) => {
  if (seat === maxSeat) {
    return seat;
  }
  setSeat(seat + 1);
};

export const hdlRmvSeat = (seat, setSeat, minSeat) => {
  if (seat === minSeat) {
    return seat;
  }
  setSeat(seat - 1);
};
