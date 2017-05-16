import paypal from './paypal-api';
import jasmine from 'jasmine';

//import testData from '../test/testData';

describe('authenticate', () => {
  it ('should connect to paypal with id and secret', () => {
    const myEmail = 'please@slap.me';
    const client_id = 'hjhsjdfhshjdgfhsjdbhbshdflahhf';
    const client_secret = '3274982731894723876974896217386479236';
    const ppUrl = 'https://sandbox.paypal.com';

    const isConnected = paypal.connect(ppUrl, client_id, client_secret);

    expect(isConnected).toBe(true);
  });
});

describe('list payments', () => {

});
