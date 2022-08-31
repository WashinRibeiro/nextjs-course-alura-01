module.exports = {
    trailingSlash: true, // Essa coniguração define se vai ter ou não barra no final da url

    // Redirects vai fazer com que a pessoa que escrever um "source"
    // específico, seja direcionado para a "destination"
    // Nesse caso, quando alguém tentar ir para 'perguntas' será direcionada para 'faq'
    async redirects() {
        return [
            {
                source: '/perguntas',
                destination: '/faq/',
                permanent: true,
            },
        ]
    },
}