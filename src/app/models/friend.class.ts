export class Friend{
    id: number = 0;
    name: string = "";
    years: number = 0;
    active: boolean = true;

    constructor(id: number, name: string, years: number){
        this.id = id;
        this.name = name;
        this.years = years;
    }

}