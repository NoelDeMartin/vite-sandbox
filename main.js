window.global = window;

import('stream').then(({ Stream}) => {
    window.Stream = Stream;

    import('jsonld-streaming-parser').then(({ JsonLdParser }) => {
        const parser = new JsonLdParser();

        parser.on('data', quad => console.log('quad', quad))
        parser.on('error', error => console.error(error))
        parser.on('end', () => console.log('done!'))
        parser.write('{"@context":"https://schema.org","@type":"Movie","name":"Foobar"}');
        parser.end();
    })
})
