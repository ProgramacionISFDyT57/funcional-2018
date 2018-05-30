import { ReadLine, createInterface } from 'readline';

const r1 = createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.question('Cómo te llamás?', (respuesta) => {
    console.log('Procesando respuesta...');
    console.log('Hola ' + respuesta + '!!');
    r1.close;
})
console.log('programa principal');

function miCallback(respuesta: string) {
    console.log('Se obtuvo: ' + respuesta);
}

function delegado(texto: string, callback) {
    callback(texto + 'prueba');
}

delegado('texto delegado ', miCallback);