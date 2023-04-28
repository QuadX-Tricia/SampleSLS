'use strict';

exports.generate = async (event) => {
  const whole = JSON.parse(event.body);

  if (['a', 'e', 'i', 'o', 'u','A','E','I','O','U'].indexOf(whole.data.attributes.word[0]) > -1){
    return {
        statusCode: 200,
        body: JSON.stringify(`${whole.data.attributes.word}way`).toLowerCase(),
    };
  } else {
    let firstpart = whole.data.attributes.word.match(/[aeiouAEIOU]/) || 0;
    let secondpart = whole.data.attributes.word.indexOf(firstpart[0]);
    return {
        statusCode: 200,
        body: JSON.stringify(`${whole.data.attributes.word.substring(secondpart)}${whole.data.attributes.word.substring(0, secondpart)}ay`).toLowerCase(),
    };
  }
};
