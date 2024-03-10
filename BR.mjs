


/** (private) cpfprocess
 *
 *	@param {String} digits
 *	@return {Number}
 */
function cpfprocess( digits ) {

	var result = 0,
		n = digits.length+1;

	/// para cada digito multiplica pela posição inversa + 1
	for( var i = 0; n > 1; n--, i++ )
		result += parseInt( digits[ i ] ) * n;

	result = ( result*10 )%11;

	return ( result == 10 || result == 11 )? 0 : result

};

/** cnpjprocess
 *
 *	@param {String} digits
 *	@return {Number}
 */
function cnpjprocess( digits ) {

	var result = 0,
		i = 0,
		n = digits.length == 13? 6 : 5;

	while( digits[ i ] ) {

		result += parseInt( digits[ i ] ) * n;

		n = ( n == 2 )? 9 : n-1;
		i++;
	}

	result %= 11;

	return (result < 2 )? 0 : 11-result

};

/** 
 *	
 */
export default class BR {
	
	/** isCPF
	 *
	 *	@ref http://www.devmedia.com.br/validar-cpf-com-javascript/23916
	 *
	 *	@param {String} value
	 *	@return {Boolean}
	 */
	static isCPF( value ) {
		
		value = value.replace(/\D/gi, '');
		
		/// verifica se a entrada é uma string de 11 digitos
		if( (/^[0-9]{11}$/).test(value) ) {
			/// confere o primeiro digito verificador
			if( cpfprocess( value.slice(0, -2) ) === parseInt( value.charAt( 9 ) ) ) {
				/// confere o segundo digito verificador
				return cpfprocess( value.slice(0, -1) ) === parseInt( value.charAt( 10 ) );

			}
		}
		
		return false;
		
	}
	
	/** isCNPJ
	 *
	 *	@ref http://www.macoratti.net/alg_cnpj.htm
	 *
	 *	@param {String} value
	 *	@return {Boolean}
	 */
	static isCNPJ( value ) {

		value = value.replace(/\D/g, '');

		/// verifica se a entrada é uma string de 14 digitos
		if( (/^[0-9]{14}$/).test( value ) ) {
			/// confere o primeiro digito verificador
			if( cnpjprocess( value.slice( 0, -2 ) ) === parseInt( value.charAt( 12 ) ) ) {
				/// confere o segundo digito verificador
				return cnpjprocess( value.slice( 0, -1 ) ) === parseInt( value.charAt( 13 ) );

			}
		}
		
		return false;
		
	}

}
