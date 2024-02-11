'use strict'

// responses determine the rest of the user experience
export const responses = {}

const path = require('path');
const { google } = require('@googleapis/forms');


const formID = '<THEFORMSID>';

/**
 * function fetching form responses.
 * @param {string} query - The query string.
 * @throws Will throw an error if the execution fails.
 * @return {Object} The form responses data.
 */


async function runSample(query) {
  try {
    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      keyFile: path.join(__dirname, 'credentials.json'),  // SETUP REQUIRED
      scopes: ['https://www.googleapis.com/auth/forms.responses.readonly'],
    });

    const forms = google.forms({
      version: 'v1',
      auth: auth,
    });

    const res = await forms.forms.responses.list({
      formId: formID,
    });

    responses = res.data
    console.log(responses);

    return responses;
  } catch (error) {

    console.error('Error:', error.message);


    throw error;
  }
}

if (module === require.main) {
  // Check if a query argument is provided
  if (process.argv.length < 3) {
    console.error('Please provide a query argument.');
    process.exit(1);
  }

  runSample(process.argv[2]).catch(console.error);
}

module.exports = runSample;
