const app = require('../../src/app');

describe('\'configuration\' service', () => {
  it('registered the service', () => {
    const service = app.service('configuration');
    expect(service).toBeTruthy();
  });
});
