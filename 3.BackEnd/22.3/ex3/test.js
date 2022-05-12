/* Exercício 3 Adicione à função um tratamento para casos em que o parâmetro informado não seja do tipo Number.
Adicione o cenário em seu arquivo de testes, passando um valor de tipo diferente a Number para a função;
Adicione uma asserção para esperar que o valor retornado para esse caso seja igual uma string "o valor deve ser um número";
Implemente em sua função tal validação para que o teste passe. */
const funcOnlyNumber = require( './arqFunc' );
const { expect } = require( "chai" );
describe( 'teste da funcao funcOnlyNumber SUCESSO', () => {
  describe( 'a resposta ', () => {
    const resp = funcOnlyNumber( 10 );
    it( 'returns: is a number', () => {
      expect(resp).to.be.equals('parabens is a number!')
    } )
    it( 'returns a string ', () => {
      expect(resp).to.be.a('string')
    })
  } )
  describe( 'adicao tipo string, ERROR', () => {
    const resp = funcOnlyNumber('aaaaaa');
    it( 'returns: o valor deve ser um número', () => {
      expect(resp).to.be.equals('o valor deve ser um número!')
    } )
    it( 'returns a string ', () => {
      expect(resp).to.be.a('string')
    })
  })
})