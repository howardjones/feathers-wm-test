const app = require('../../src/app');

describe('\'maps\' service', () => {
  it('registered the service', () => {
    const service = app.service('maps');
    expect(service).toBeTruthy();
  });
});
