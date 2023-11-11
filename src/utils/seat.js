export const hdlAddSeat = (seat, setSeat, maxSeat) => {
  if (seat === maxSeat) {
    return seat;
  }
  setSeat(seat + 1);
};

export const hdlRmvSeat = (seat, setSeat) => {
  if (seat === 0) {
    return seat;
  }
  setSeat(seat - 1);
};
