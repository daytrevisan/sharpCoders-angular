export class Postagem {
    // Se for inicializar a variável
    //userId:number = 0;
    userId?:number; // '?' para variável sem inicializar
    id?:number;
    title?:string;
    body?:string;
}

// Classe - tem acesso a *métodos* e uso de *construtor*
// Interface - uso apenas de *atributo*