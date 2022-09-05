export class Empresa {
  public readonly nome: string; // public não necessário
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  //   mostrarColaboradores(): void {
  //     for (const colaborador of this.colaboradores) {
  //       console.log(colaborador);
  //     }
  //   }
}

export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Udemy', '11.111.111/0001-11');

const colaborador1 = new Colaborador('Luiz', 'Otávio');
const colaborador2 = new Colaborador('Maria', 'Miranda');
const colaborador3 = new Colaborador('João', 'Vieira');
empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
console.log(empresa1);
//empresa1.mostrarColaboradores();

// teste de array de telefones

// export class Servidores {
//   public readonly nome: string; // public não necessário

//   private readonly telefones: Telefones[] = [];

//   constructor(numero: string) {
//     this.nome = numero;
//   }

//   addPhones(telefones: Telefones): void {
//     this.telefones.push(telefones);
//   }

//   //   mostrarColaboradores(): void {
//   //     for (const colaborador of this.colaboradores) {
//   //       console.log(colaborador);
//   //     }
//   //   }
// }

// export class Telefones {
//   constructor(public readonly numero: string) {}
// }

// const servidor = new Servidores('Agentes de Policia - José Henrique ');

// const phone1 = new Telefones('11111111');

// const phone2 = new Telefones('2222222');

// const phone3 = new Telefones('333333');

// servidor.addPhones(phone1);

// servidor.addPhones(phone2);

// servidor.addPhones(phone3);
// console.log();

// console.log(servidor);

// // empresa1.mostrarColaboradores();
