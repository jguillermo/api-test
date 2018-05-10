const request = require('@request');
const mysql = require('@mysql');

describe('Load Page', () => {

    test('leer la base de datos', () => {
        mysql('SELECT 4 + 4 AS solution', function (results) {
            expect(results[0].solution).toEqual(8);
        });
    });
    
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
    
    
    test('test carga de ruta externa', async () => {
        let { body, statusCode } = await request('api-ext');
        expect(statusCode).toEqual(200);
        expect(body).toEqual([
            { id: 1, name: 'DATOS' },
            { id: 2, name: 'fake' }
        ]);
    });
});
