import { Handler } from 'aws-lambda';

const handler: Handler = async (event, context) => {
  const response = {};
  console.log(`REQUEST++++${JSON.stringify(event)}`);
  console.log(`CONTEXT++++${JSON.stringify(context)}`);
  console.log(`RESPONSE++++${JSON.stringify(response)}`);

  return response;
};

export { handler };
