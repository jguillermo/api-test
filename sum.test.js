const request = require('./request');

test('carga de la pagina', async() => {
    let data = await request('ksdfbdsfbkj');
    expect(data.statusCode).toEqual(200);
});