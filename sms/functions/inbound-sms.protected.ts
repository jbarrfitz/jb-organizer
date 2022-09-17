// Imports global types
import '@twilio-labs/serverless-runtime-types';
// Fetches specific types
import {
  Context,
  ServerlessCallback,
  ServerlessFunctionSignature,
} from '@twilio-labs/serverless-runtime-types/types';


export const handler: ServerlessFunctionSignature = async function(
  context: Context,
  event: Record<string, any> = {},
  callback: ServerlessCallback
) {
  // Create a new messaging response object
  const twiml = new Twilio.twiml.MessagingResponse();
  const fromNumber = event.From?.replace('+1', '')
  let messages: Array<string> = []

    messages.push(`Keller: hi!`)

  // Use any of the Node.js SDK methods, such as `message`, to compose a response
  // In this case we're also including the doge image as a media attachment
  // Note: access incoming text details such as the from number on `event`

  // Return the TwiML as the second argument to `callback`
  // This will render the response as XML in reply to the webhook request
  twiml.message(messages.join('\n'))
  return callback(null, twiml);
};