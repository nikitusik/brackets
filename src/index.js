module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 === 1) {
      return false;
  }
  let bracket = prepare_array(bracketsConfig);
  let temp_str = prepare_str(str);
  let count = 0;
  while (count !== (str.length / 2)) {
      for (let i = 0; i < bracket.length; i++) {
          for (let j = 0; j < temp_str.length; j++) {
              if ((temp_str[j] + temp_str[j + 1]) === bracket[i])
                  temp_str.splice(j, 2);
          }
      }
      count++;
  }
  if (temp_str.length === 0)
      return true;
  else
      return false;
}

function prepare_array(test) {
  let temp = test.toString().replace(/,/g, "");
  let mas = [];
  for (let i = 0; i < temp.length; i += 2) {
      mas.push(temp[i] + temp[i + 1]);
  }
  return mas;
}

function prepare_str(str) {
  let temp = [];
  for (let i = 0; i < str.length; i++) {
      temp.push(str[i]);
  }
  return temp;
}
