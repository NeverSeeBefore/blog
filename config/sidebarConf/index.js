const docker = require('./docker/index')

module.exports = {
    '/docker/': docker,
    // fallback
    '/': ['', 'about/']
}
