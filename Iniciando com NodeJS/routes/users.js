module.exports = (app) => {
    app.get('/users', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json({
            users: [{
                name: 'Cauê',
                surname: 'Santos',
                email: 'caah.sfc@live.com',
                id: 1
            }]
        });
    });
    
    app.get('/users/admin', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end('<h1>Não há administradores cadastrados!');
    });
};