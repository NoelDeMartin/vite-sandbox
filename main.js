import { Parser } from 'n3';

const parser = new Parser();
const quads = [];

parser.parse('<#it> a <https://schema.org/Movie> .', (error, quad) => {
    if (error) {
        console.log('error!', error);
        return;
    }

    if (!quad) {
        console.log('done!', quads);
        return;
    }

    quads.push(quad);
});
