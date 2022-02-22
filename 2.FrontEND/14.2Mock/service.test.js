const app = require( './app' );


test("testando se a função foi chamada, qual seu retorno e quantas vezes foi chamada", () => {
  app.numeroAleatorio = jest.fn().mockReturnValue(10);

  expect(app.numeroAleatorio()).toBe(10);
  expect(app.numeroAleatorio).toHaveBeenCalled();
  expect(app.numeroAleatorio).toHaveBeenCalledTimes(1);
} );

test("testando 2", () => {
  const mockFunc2 = jest.fn().mockImplementation( ( a, b ) => a / b );
  expect( mockFunc2( 4, 2 ) ).toBe( 2 );
  expect( app.numeroAleatorio ).toHaveBeenCalled();
  expect( app.numeroAleatorio ).toHaveBeenCalledTimes( 1 );
} );

test("testando 3", () => {
  const mockFunc3 = jest.fn().mockImplementation( ( a, b, c ) => a * b * c );
  expect( mockFunc3( 2,2,2) ).toBe( 8 );
  expect( app.numeroAleatorio ).toHaveBeenCalled();
  expect( app.numeroAleatorio ).toHaveBeenCalledTimes( 1 );

} )
  
test( "testando 3.2", () => {
  app.numeroAleatorio.mockReset();
  expect( app.numeroAleatorio ).toHaveBeenCalledTimes(0);
  app.numeroAleatorio = jest.fn().mockImplementation( ( a ) => a * a ); 
  app.numeroAleatorio( 2 );
  expect( app.numeroAleatorio ).toHaveBeenCalled();
  expect( app.numeroAleatorio ).toHaveBeenCalledTimes( 1 );
  expect( app.numeroAleatorio( 2) ).toBe( 4);
} )

/* app. stringCaixaAlta, stringPrimeiraLetra, stringConcat */
/* A. Faça o mock das funções para com os seguintes casos:
Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.
Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.
Implemente, na terceira função: ela deve receber três strings e concatená-las.
B. Após criar os mocks, faça os testes necessários para garantir que os mocks estão funcionando.
C. Após criar os testes, restaure a implementação da primeira função.
Faça o teste necessário para garantir que a implementação da função foi restaurado. */
test( 'testando o 4.A ', () => {
  app.stringCaixaAlta = jest.fn().mockImplementation( ( string ) => string.toLowerCase() );
  app.stringPrimeiraLetra = jest.fn().mockImplementation( ( string ) => string[ string.length - 1 ] );
  app.stringConcat = jest.fn().mockImplementation( ( s1, s2, s3 ) => s1 + s2 + s3 );

  app.stringCaixaAlta('LORENE')
  app.stringPrimeiraLetra('lorene')
  app.stringConcat('l','o','r')

  expect( app.stringCaixaAlta).toHaveBeenCalled();
  expect( app.stringCaixaAlta ).toHaveBeenCalledTimes( 1 );
  expect( app.stringCaixaAlta).toHaveBeenCalledWith( 'LORENE' );
  expect( app.stringCaixaAlta( 'LORENE' ) ).toBe( 'lorene' );
  
  expect( app.stringPrimeiraLetra).toHaveBeenCalled();
  expect( app.stringPrimeiraLetra ).toHaveBeenCalledTimes( 1 );
  expect( app.stringPrimeiraLetra).toHaveBeenCalledWith( 'lorene' );
  expect( app.stringPrimeiraLetra( 'lorene' ) ).toBe( 'e' );
  
  expect( app.stringConcat).toHaveBeenCalled();
  expect( app.stringConcat ).toHaveBeenCalledTimes( 1 );
  expect( app.stringConcat).toHaveBeenCalledWith( 'l','o','r');
  expect( app.stringConcat('l','o','H') ).toBe( 'loH');

} )



