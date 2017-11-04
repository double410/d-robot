'use strict';

module.exports.hello = (event, context, callback) => {
  var statusCode = 200;
  var result;

  if (isNaN(event.num1) || isNaN(event.num2)) {
    statusCode = 500;
    result = "Not a number.";
  } else {
    result = parseInt(event.num1) + parseInt(event.num2);
  }
  
  const response = {
    statusCode: statusCode,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      input: event,
      result: result,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
