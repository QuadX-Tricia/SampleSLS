'use strict';

exports.generate = async (event) => {
  const whole = JSON.parse(event.body);

  return {
    statusCode: 200,
    body: JSON.stringify(`Hi ${whole.data.attributes.name} ${whole.data.attributes.greeting}!`),
  };
};
