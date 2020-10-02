const heros = require('./utils/heros.json');
const groups = require('./utils/groups.json');

exports.handler = async ({ queryStringParameters }) => {
  const groupId = +queryStringParameters.groupId;
  let selectedHeros = heros;

  if (groupId) {
    const group = groups.find(group => group.id === groupId);
    selectedHeros = selectedHeros.filter(hero => hero.publisher === group.name);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(selectedHeros)
  };
};
