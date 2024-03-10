
import BR from "../BR.mjs"


/// lista de CPF gerados em https://www.4devs.com.br/gerador_de_cpf
let cpf_list_true = [
	"989.298.000-09",
	"290.483.710-82",
	"621.245.270-96",
	"743.954.490-00",
	"907.188.500-33"
];

/// mesma lista de CPF, porem com erro adicionado
let cpf_list_false = [
	"989.298.000-19",
	"290.483.720-82",
	"621.845.270-96",
	"943.954.490-00",
	"907.188.530-33"
];

/// lista de CNPJ gerados em https://www.4devs.com.br/gerador_de_cpf
let cnpj_list_true = [
	"16.996.198/0001-45",
	"42.581.780/0001-50",
	"27.484.525/0001-04",
	"90.593.907/0001-02",
	"15.760.637/0001-53"
];

/// mesma lista de CNPJ, porem com erro adicionado
let cnpj_list_false = [
	"13.996.198/0001-45",
	"42.581.730/0001-50",
	"28.484.525/0001-04",
	"92.593.907/0001-02",
	"15.710.637/0001-53"
];





///
console.log("CPF validos");

for( let cpf of cpf_list_true )
	console.log( cpf, BR.isCPF( cpf ) );

///
console.log("\nCPF invalidos");

for( let cpf of cpf_list_false )
	console.log( cpf, BR.isCPF( cpf ) );


///
console.log("\nCNPJ validos");

for( let cnpj of cnpj_list_true )
	console.log( cnpj, BR.isCNPJ( cnpj ) );

///
console.log("\nCNPJ invalidos");

for( let cnpj of cnpj_list_false )
	console.log( cnpj, BR.isCNPJ( cnpj ) );


/* 
 *	> node main.mjs
 *	 
 *	CPF validos
 *	989.298.000-09 true
 *	290.483.710-82 true
 *	621.245.270-96 true
 *	743.954.490-00 true
 *	907.188.500-33 true
 *
 *	CPF invalidos
 *	989.298.000-19 false
 *	290.483.720-82 false
 *	621.845.270-96 false
 *	943.954.490-00 false
 *	907.188.530-33 false
 *
 *	CNPJ validos
 *	16.996.198/0001-45 true
 *	42.581.780/0001-50 true
 *	27.484.525/0001-04 true
 *	90.593.907/0001-02 true
 *	15.760.637/0001-53 true
 *
 *	CNPJ invalidos
 *	13.996.198/0001-45 false
 *	42.581.730/0001-50 false
 *	28.484.525/0001-04 false
 *	92.593.907/0001-02 false
 *	15.710.637/0001-53 false
 *
 */
