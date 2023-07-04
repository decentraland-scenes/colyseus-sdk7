import { executeTask } from '@dcl/sdk/ecs'
import './polyfill'

import { Client } from 'colyseus.js/decentraland'
const ENDPOINT = 'wss://your-colyeus-endpoint:8000'

executeTask(async () => {
  try {
    const client = new Client(ENDPOINT)
    const room = await client.joinOrCreate<any>('Room-name', {})
    console.log(room)
  } catch (e) {
    console.log('Failed to conenct', e)
  }
})
