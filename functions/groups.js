const heros = require('./utils/heros.json');
const groups = require('./utils/groups.json');

exports.handler = async ({ queryStringParameters }) => {
  const heroId = +queryStringParameters.heroId;
  let selectedGroups = groups;

  if (heroId) {
    const hero = heros.find(hero => hero.id === heroId);
    selectedGroups = selectedGroups.filter(group => hero.publisher === group.name);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(selectedGroups)
  };
};
