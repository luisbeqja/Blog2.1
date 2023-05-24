module.exports = {
    client: {
        service: {
            name: 'my-app',
            // URL to the GraphQL API
            url: 'https://content.tinajs.io/1.4/content/b7355d82-be8e-46b9-862e-9a67345646c4/github/main',
        },
        // Files processed by the extension
        includes: [
            'src/**/*.vue',
            'src/**/*.js',
            'src/**/*.ts',
        ],
    },
};