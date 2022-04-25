SELECT * FROM PecasFornecedores.Fornecimentos
-- WHERE name LIKE 'GR%';
-- WHERE code = 2;
-- Escreva uma query para exibir as peças,
-- preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N .
WHERE fornecedor like '%N%';
-- Escreva uma query para exibir todas as informações dos fornecedores 
-- que são empresas limitadas (LTDA). Ordene os resultados em ordem alfabética decrescente.
Select * FROM PecasFornecedores.Fornecedores
WHERE name like '%LTDA%'
ORDER BY name DESC;
-- Escreva uma query para exibir o número de empresas (fornecedores) que contém a letra F no código.
Select * FROM PecasFornecedores.Fornecedores
WHERE name like '%f%';
-- Escreva uma query para exibir os fornecimentos onde as peças custam 
-- mais de R$15,00 e menos de $40,00 . Ordene os resultados por ordem crescente.
Select * FROM PecasFornecedores.Fornecimentos
where preco between 15 and 40;
-- Escreva uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019 .
Select * FROM PecasFornecedores.Vendas
where order_date between '2018-04-15%' and '2019-07-30';

