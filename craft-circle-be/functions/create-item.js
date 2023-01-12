'use strict';

import * as AWS from 'aws-sdk'
import * as uuid from 'uuid'

const DocumentClient = new AWS.DynamoDB.DocumentClient()
const { ITEM_TABLE } = process.env

module.exports.handler = async (event) => {
  console.log("***EVENT***: ", event)
  let newItemParams = JSON.parse(event.body)
  let itemId = uuid.v4()
  console.log("***NEWITEM***: ", newItemParams)

  let newItem = {
    itemId,
    ...newItemParams
  }

  await DocumentClient.put({
    TableName: ITEM_TABLE,
    ITem: newItem
  }).promise();
  

}


