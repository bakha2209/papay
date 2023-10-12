// TASK-I

basic_array= ['w','o','r','d']
function getCompute(basic_array) {
  const first_index = basic_array.shift()
  console.log(first_index);
  basic_array.push(first_index);
  console.log(basic_array)
}

getCompute(['h','e','l','l','o'])