const routes = require('./routes')
const hapi = require('@hapi/hapi')


const init = async () => {
    const server = hapi.server({
        port: 5000,
        host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
        routes: {
            cors: {
                origin: ['*'],
            },
        },
    });

    server.route(routes)

    await server.start()
    console.log(`server berjalan di ${server.info.uri}`)
}

init()