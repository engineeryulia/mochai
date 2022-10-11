

function convert(num) {
  
  return (num * 100) % 4 === 0 ? num / 4 : num -1
}
module.exports = convert;