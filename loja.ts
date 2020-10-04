export class Loja {

    constructor(public nome_loja: string, public logradouro: string, public numero: number, public complemento: string,
        public bairro: string, public municipio: string, public estado: string, public cep: string,
        public telefone: string, public observacao: string, public cnpj: string, public inscricao_estadual: string) { }

    public static isNullOrEmpty(s: String): boolean {
        return s == null || s.length == 0;
        }

    public validar_campos_obrigatorios(): void{
        if (this.nome_loja == "") {
            throw new Error(`O campo nome da loja é obrigatório`);
          }
        
          if (this.logradouro == "") {
            throw new Error(`O campo logradouro do endereço é obrigatório`);
          }
        
          if (this.municipio == "") {
            throw new Error(`O campo município do endereço é obrigatório`);
          }
        
          if (this.estado == "") {
            throw new Error(`O campo estado do endereço é obrigatório`);
          }
        
          if (this.cnpj == "") {
            throw new Error(`O campo CNPJ da loja é obrigatório`);
          }
        
          if (this.inscricao_estadual == "") {
            throw new Error(`O campo inscrição estadual da loja é obrigatório`);
          }
    }

    public dados_loja(): string {
        // Implemente aqui
        let _COMPLEMENTO = "";
        if (this.complemento != ""){
            _COMPLEMENTO = " " + this.complemento;
        }

        let _BAIRRO = "";
        if (this.bairro != "") {
            _BAIRRO = this.bairro + " - ";
        }

        let _CEP = "";
        let _TELEFONE = "";

        if (!Loja.isNullOrEmpty(this.cep)) {
            _CEP = "CEP:" + this.cep;
            if (this.telefone != ""){
                _TELEFONE = " Tel " + this.telefone;
            }
        } else {
            _CEP = "";
            if (this.telefone != ""){
                _TELEFONE = "Tel " + this.telefone;
            }
        }
    
        let _OBSERVACAO = "";
        if(this.observacao != ""){
            _OBSERVACAO = this.observacao;
        }

        let _NUMERO;
        if (this.numero != 0){
            _NUMERO = this.numero;
        }

        if (this.numero == 0 || this.numero == null){
            _NUMERO = "s/n";
        }

        let show = `${this.nome_loja}
${this.logradouro}, ${_NUMERO}${_COMPLEMENTO}
${_BAIRRO}${this.municipio} - ${this.estado}
${_CEP}${_TELEFONE}
${this.observacao}
CNPJ: ${this.cnpj}
IE: ${this.inscricao_estadual}
`;
        return show
    }
}