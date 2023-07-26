/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function(bookings, n) {
    const res = new Array(n).fill(0)
    for (const [l, r, num] of bookings) {
      for (let i = l; i <= r; i++) {
        res[i - 1] += num
      }
    }
    return res
  };