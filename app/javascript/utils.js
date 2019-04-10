const snakeCase = function(params = {}) {
  let result = {};
  Object.keys(params).forEach(function (param) {
    let newParam = param.replace(/\.?([A-Z]+)/g, function (x,y) { return "_" + y.toLowerCase() }).replace(/^_/, "")
    result[newParam] = params[param]
  });
  return result;
}

export{ snakeCase };