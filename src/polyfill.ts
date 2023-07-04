import 'core-js/features/url'
import { timers } from '@dcl-sdk/utils'

Object.assign(globalThis, {
  FormData: class FormData {},
  clearTimeout: timers.clearTimeout,
  setTimeout: timers.setTimeout
})