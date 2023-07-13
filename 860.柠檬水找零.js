/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const money = new Array(3).fill(0) // 5, 10, 20
    for (const bill of bills) {
      switch (bill) {
        case 5: money[0]++; break;
        case 10: {
          if (money[0]) money[0]--
          else return false
          money[1]++
          break
        } 
        case 20: {
          if (money[0] && money[1]) {
            money[0]--
            money[1]--
          } else if (money[0] >= 3) money[0] -= 3
          else return false
          money[2]++
        }
      }
    }
    return true
  };