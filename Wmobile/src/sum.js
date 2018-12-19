function sum(a, b) {
  return a + b
}

function yewu(status) {
  var stage = {
    1: function() {
      return sum(1, 1)
    },
    2: function() {
      return '这个是测试'
    }
  }

  return stage[status]()
}

module.exports = { sum, yewu }
