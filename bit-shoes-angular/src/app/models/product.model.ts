export class Product {

    //atributos y sus tipos
    _id: string 
    name: string
    person: String
    category: String
    price: number
    description: string
    image: string
    stock: number
    keyWords: string
    size: string
    
    
    //keywords: string[] 

    //constructor instanciar o a inicializar los atributos cuando tengan un valor
    constructor(_id = "", name="", image="", description="", stock=0, price=0, size="", keyWords="", category="", person=""){
        this._id = _id
        this.name = name
        this.price = price
        this.image = image
        this.description = description
        this.stock = stock
        this.keyWords = keyWords
        this.size = size
        this.person = person
        this.category = category
    }

}