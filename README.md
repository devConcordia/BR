
# BR

Algoritmo para validação de CPF e CNPJ.

## Métodos

### BR.isCPF\( value \)

A tabela a seguir contem os detalhes dos argumentos aceitos.

| Argumento | Tipo   | Descrição |
|-----------|--------|-----------|
| value     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  | Entrada para verificação. Aceita pontuações. |

O retorno será um [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean). Se `value` for um CPF válido, o retorno será `true`.

### BR.isCNPJ\( value \)

A tabela a seguir contem os detalhes dos argumentos aceitos.

| Argumento | Tipo   | Descrição |
|-----------|--------|-----------|
| value     | [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)  | Entrada para verificação. Aceita pontuações. |

O retorno será um [Boolean](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean). Se `value` for um CNPJ válido, o retorno será `true`.


## Exemplo de uso

```javascript

import BR from "./BR.mjs"

const input_cpf = "123.456.789-09";

if( BR.isCPF( input_cpf ) ) {

  console.log( input_cpf, "é um CPF válido" );

} else {

  console.log( input_cpf, "não é um CPF válido" );

}

```
