/* Exercício 4 Crie testes para uma função que escreverá um conteúdo em um arquivo específico.
Essa função deverá receber dois parâmetros: o nome do arquivo e o conteúdo desse arquivo.
Após concluir a escrita do arquivo ela deverá retornar um ok.
Descreva todos os cenários de teste utilizando describes;
Descreva todos os testes que serão feitos utilizando its;
Crie as asserções validando se o retorno da função possui o valor e tipo esperado.
Exercício 5 Implemente a função descrita no exercício 4.
Crie a função descrita no exercício 4 utilizando o módulo fs do node.
Adapte os testes adicionando stub ao módulo utilizado do fs, isolando assim o teste.
Garanta que todos os testes escritos no exercício 4 irão passar com sucesso. */

const { expect } = require( "chai" ); 
const sinon = require( "sinon" ); 
const fs = require( "fs" ); 
const funcWriteFile = require( "./arqFunc" ); 

const phrase = "hello i'm lorene."

describe( 'testing function funcWriteFile', () => {
  describe( 'resposta case success', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').returns("success!");
    });
  
    after(() => {
      fs.writeFileSync.restore();
    }); 
    
    it( 'the text is writed the phrase correctly', () => {
      const resp = funcWriteFile( 'file.txt', phrase );
      expect(resp).to.be.equals("success!")
    })
  })
  describe( 'resposta case error', () => {
    before(() => {
      sinon.stub(fs, 'writeFileSync').throws(new Error('Arquivo não encontrado'));

    });
  
    after(() => {
      fs.writeFileSync.restore();
    }); 
      
     it( 'error because the second parameter is not set', () => {
      const resp = funcWriteFile( 'fileWrong.txt', phrase );
      expect(resp).to.be.equals("Arquivo não encontrado")
    })
     
  })


} )