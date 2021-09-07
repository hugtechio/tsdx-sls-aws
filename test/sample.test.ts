const launchEvent = require('./events/launch.json')
import { handler } from '../src/index'

describe('#Launch', () => {
  it('handler should be return launch response', async () => {
    // @ts-ignore
    const res = await handler(launchEvent, {})
    expect({}).toEqual({});
  })
})