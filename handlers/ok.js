'use strict';

exports.create = async (event) => {
  const whole = JSON.parse(event.body);
  var combined = "Hi! " + whole.data.attributes.name;
  whole.data.attributes.name = combined;
  
  return {
    statusCode: 200,
    body: JSON.stringify(whole),
  };
};
