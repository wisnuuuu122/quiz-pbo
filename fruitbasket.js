class FruitBasket{
    constructor(fruitBasket){
        this.fruits =[];
    }
addItem(item){
    this.fruits.push(item);
    console.log(`Kamu baru saja menambahkan ${item}`);
    }
getInformation(){
    console.log(`List buah dikeranjang ${this.fruits}`);
}
}

const fruits = new FruitBasket();
fruits.addItem("jeruk");
fruits.addItem("apel");
fruits.getInformation();