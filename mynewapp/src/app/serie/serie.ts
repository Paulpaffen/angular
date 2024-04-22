export class Serie {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion: string;
    website: string;
    imageURL: string;
    
    constructor(id: number, nombre: string, canal: string, temporadas: number, descripcion: string, website: string, imageURL: string) {
        this.id = id;
        this.nombre = nombre;
        this.canal = canal;
        this.temporadas = temporadas;
        this.descripcion = descripcion;
        this.website = website;
        this.imageURL = imageURL;
    }
}