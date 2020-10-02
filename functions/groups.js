const groups = require('./utils/groups.json');

exports.handler = async ({ queryStringParameters }) => {
  return {
    statusCode: 200,
    body: JSON.stringify(groups)
  };
};
