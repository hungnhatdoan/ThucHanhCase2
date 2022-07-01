export class Product {
    private _id: number = 0;
    private _name: string;
    private _type: string;
    private _price: number;
    private _amount: number;
    private _dateOfCreate: Date;
    private _describe: string;
    constructor(id: number, name: string, type: string, price: number, amount: number, dateOfCreate: Date, describe: string) {
        this._id = id;
        this._name = name;
        this._type = type;
        this._price = price;
        this._amount = amount;
        this._dateOfCreate = dateOfCreate;
        this._describe = describe;
    }

	public get id(): number {
		return this._id;
	}

   
	public get name(): string {
		return this._name;
	}

   
	public get type(): string {
		return this._type;
	}

	public get price(): number {
		return this._price;
	}

	public get dateOfCreate(): Date {
		return this._dateOfCreate;
	}

    
	public get describe(): string {
		return this._describe;
	}

   
	public set id(value: number) {
		this._id = value;
	}

   
	public set name(value: string) {
		this._name = value;
	}

 
	public set type(value: string) {
		this._type = value;
	}

	public set price(value: number) {
		this._price = value;
	}

	public set dateOfCreate(value: Date) {
		this._dateOfCreate = value;
	}

	public set describe(value: string) {
		this._describe = value;
	}



}