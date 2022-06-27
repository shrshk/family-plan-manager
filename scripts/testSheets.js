require('dotenv').config()

const { updateSheet } = require('../lib/sheetsCrud')

const testSheetName = process.env.SHEETS_TEST_NAME
const range = testSheetName ? `${testSheetName}!A1` : 'A1';

updateSheet([{
  range,
  values: [['It worked!']]
}])
