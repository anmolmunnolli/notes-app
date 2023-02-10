import * as uuid from "uuid";
import handler from "../util/handler";
import dynamoDb from "../util/dynamodb";



export const main = handler(async (event) => {

  const data = JSON.parse(event.body);

  const params = {
    TableName: process.env.TABLE_NAME,
    Item: {
    
      userId: "123", 
      noteId: uuid.v1(), 
      content: data.content, 
      attachment: data.attachment, 
      createdAt: Date.now(), 
    },
  };

  await dynamoDb.put(params);
  return params.Item;

//   try {
//     await dynamoDb.put(params).promise();

//     return {
//       statusCode: 200,
//       body: JSON.stringify(params.Item),
//     };
//   } catch (e) {
//     return {
//       statusCode: 500,
//       body: JSON.stringify({ error: e.message }),
//     };
//   }
});