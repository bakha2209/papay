// TASK-I

// basic_array= ['w','o','r','d']
// function getCompute(basic_array) {
//   const first_index = basic_array.shift()
//   console.log(first_index);
//   basic_array.push(first_index);
//   console.log(basic_array)
// }

// getCompute(['h','e','l','l','o'])


                 /*  CHALLENGE: MAX PROFIT  */ 

const prices = [11,1,3,10,9,12]


function buyStock(stock_prices) {
  const max_value = Math.max(...stock_prices);
  const index_max = stock_prices.indexOf(max_value);
  const slice_array = stock_prices.slice(0, index_max+1)
  const new_list = slice_array.map((ele) => max_value - ele);
  const profit = Math.max(...new_list);
  const profit_index = new_list.indexOf(profit);
  if (index_max == 0) {
    const result1 = console.log("Please wait until the price of stocks is gretaer than you bought");
    return result1
  } else {
    const max_stock_status = {index: profit_index, profit: profit}
    const result = console.log("You should buy stock =>", max_stock_status);
  return result
  }
  
}

buyStock(prices)