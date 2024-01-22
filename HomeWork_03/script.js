// Задание 1: ""Управление персоналом компании""

// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
// Свойство name (имя) - строка, имя сотрудника.
// Метод displayInfo() - выводит информацию о сотруднике (имя).
// Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
// Свойство department (отдел) - строка, отдел, в котором работает менеджер.
// Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

// // Пример использования классов
// const employee = new Employee(""John Smith"");
// employee.displayInfo();
// // Вывод:
// // Name: John Smith

// const manager = new Manager(""Jane Doe"", ""Sales"");
// manager.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Department: Sales


class Employee {

    constructor(name) {
        this.name = name;
    }

    displayInfo() {
        console.log(`Name: ${this.name}.`);
    }
}


class Manager extends Employee {

    constructor(name, department) {
        super(name);
        this.department = department;
    }

    displayInfo() {
        console.log(`Name: ${this.name}\nDepartment: ${this.department}.`);
    }
}

// Пример использования классов
const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales




// Задание 2: ""Управление списком заказов""

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

// Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
// Свойство products (продукты) - массив, содержащий список продуктов в заказе.
// Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
// Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

// // Пример использования класса
// class Product {
// constructor(name, price) {
// this.name = name;
// this.price = price;
// }
// }

// const order = new Order(12345);

// const product1 = new Product(""Phone"", 500);
// order.addProduct(product1);

// const product2 = new Product(""Headphones"", 100);
// order.addProduct(product2);

// console.log(order.getTotalPrice()); // Вывод: 600

class Product {
  
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class Order extends Product {
    products;
  
    constructor(orderNumber) {  
        super();   
        this.orderNumber = orderNumber;
        this.products = [];       
        
    }

    addProduct(product) {
        this.products.push(product);
    }

    getTotalPrice() {
        const sum = this.products.reduce((acc, element) => {
            return acc + element.price;
        }, 0);
        return sum;
    }
}

const order = new Order(12345);

const product1 = new Product("Phone", 500);
order.addProduct(product1);

const product2 = new Product("Headphones", 100);
order.addProduct(product2);

console.log(order.getTotalPrice()); // Вывод: 600




// Задание 3: Необязательное задание

// Создать класс "Товар" с приватными полями "название", "цена" и "количество". Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно.
// Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

// Пример работы кода:

// const product1 = new Product('Тетрадь', 50, 200);
// console.log(product1.name); // "Тетрадь"
// console.log(product1.price); // 50
// console.log(product1.quantity); // 200
// console.log(product1.getCost()); // 10000

// const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"


class Product1 {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    
    increaseCount(amount) {
        if (amount <= 500) {
            this.quantity += amount;
            return this.quantity;
        } else {
        return console.log("Quantity is too high");
    }
    }
    
    decreaseCount(quantity) {
        if (this.quantity - quantity >= 0) {
            this.quantity -= quantity;
            return this.quantity;
        } else {
        return 0;
        }
    }
    
    getCost() {
        return this.price * this.quantity;
    }
    
    setPrice(newPrice) {
        this.price = parseFloat(newPrice);
        return this.getCost();
    }
}
    

const product_1 = new Product1('Тетрадь', 50, 200);
console.log(product_1.name); // "Тетрадь"
console.log(product_1.price); // 50
console.log(product_1.quantity); // 200
console.log(product_1.getCost()); // 10000
console.log(product_1.increaseCount(500));
const product_2 = new Product1('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"
console.log(product_2.increaseCount());// выбросится ошибка "Quantity is too high"
console.log(product_1.increaseCount());// выбросится ошибка "Quantity is too high"
