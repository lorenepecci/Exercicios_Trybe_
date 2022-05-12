const fs = require( "fs" );
const data = require( './simpsons.json' ).promises;
async function readAllComAsyncAwait() {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

  strings.forEach((string) => console.log(string));
}
// readAllComAsyncAwait(); 
async function getSimpsonById(id) {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');
  
  const simpsons = JSON.parse(fileContent);

  const chosenSimpson = simpsons.find((simpson) => simpson.id === id);

  if (!chosenSimpson) {
    throw new Error('id não encontrado');
  }
  return chosenSimpson;
}
async function main() {
  const simpson = await getSimpsonById(1);
  console.log(simpson);
}
main()

