export class Product{
    constructor(public id?: number,
    public name?: string,
    public category?:string,
    public price?:number,
    public description?:string,
    public available:boolean=true,
    public discountOffer: boolean = false){}
}