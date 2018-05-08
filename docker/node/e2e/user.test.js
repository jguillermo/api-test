const request = require('@request');

describe('List User', () => {
    test('List all users', async () => {
        let { body, statusCode } = await request('user');
        expect(statusCode).toEqual(200);
        expect(body).toEqual([
            { id: 1, name: 'Jose' },
            { id: 2, name: 'Ariana' }
        ]);
    });
    test('list once user', async () => {
        let { body, statusCode } = await request('user/1');
        expect(statusCode).toEqual(200);
        expect(body).toEqual({
            "id": "1",
            "name": "Jose"
        });
    });
});

describe('Managament User', () => {
    
    test('Insert Ok', async () => {
        let { body, statusCode } = await request('user', 'POST',{name:'jose'});
        expect(statusCode).toEqual(201);
        expect(body).toEqual({"id": 3, "name": "jose"});
    });
    
    test('Insert Error', async () => {
        let { body, statusCode } = await request('user', 'POST');
        expect(statusCode).toEqual(400); 
        expect(body).toEqual({
            mensaje: 'El nombre es necesario'
        });
    });

    
    test('Update Error', async () => {
        let { body, statusCode } = await request('user/1', 'PUT');
        expect(statusCode).toEqual(400);
        expect(body).toEqual({
            "mensaje": "El nombre es necesario",
        });
    });

    test('Update Ok', async () => {
        let { body, statusCode } = await request('user/1', 'PUT',{name:'jose'});
        expect(statusCode).toEqual(200);
        expect(body).toEqual({"id": "1", "name": "jose"});
    });

    test('Delete', async () => {
        let { body, statusCode } = await request('user/1', 'DELETE');
        expect(statusCode).toEqual(200);
        expect(body).toEqual({ message: 'eliminado el usuario 1' });
    });

});