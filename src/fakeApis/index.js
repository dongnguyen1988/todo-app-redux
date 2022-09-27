import { createServer } from 'miragejs';

export const setupServer = () => {
    let server = createServer();
    server.get('/api/users', { users: [{ id: 1, name: 'Bob' }] });
};
