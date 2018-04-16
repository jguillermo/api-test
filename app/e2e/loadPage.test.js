const request = require('@request');

test('carga de la pagina', async () => {
    let { body, statusCode } = await request('');
    expect(statusCode).toEqual(200);
    expect(body).toEqual([
        { url: '/user', method: 'GET' },
        { url: '/user/:id', method: 'GET' },
        { url: '/user', method: 'POST' },
        { url: '/user/:id', method: 'PUT' },
        { url: '/user/:id', method: 'DELETE' }
    ]);
});

test('carga de la pagina Error', async () => {
    let { body, statusCode } = await request('/xcvxcvxcv');
    expect(statusCode).toEqual(404);
    expect(body).toEqual({ status: 404, url: '//xcvxcvxcv' });
});
