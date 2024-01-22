***HomeWork 1. Функциональный Javascript***

- Задание 1

Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

- Задание 2

Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement.Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. 
Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

- Задание 3

Напишем функцию, которая будет находить факториал числа с использованием рекурсии:

    // примеры вызова функции
    console.log(factorial(5)); // выводит 120 (5 * 4 * 3 * 2 * 1)
    console.log(factorial(0)); // выводит 1 (по определению факториала)


- Задание 4*

Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.

*Пример*

    const rootElement = document.getElementById('root');
    const targetElement = findElementByClass(rootElement, 'my-class');  
    console.log(targetElement);


    
***HomeWork 2. Основы ООП (объектно-ориентированного программирования)***

- Задание 1: ""Управление библиотекой книг""

Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

Свойство title (название) - строка, название книги.

Свойство author (автор) - строка, имя автора книги.

Свойство pages (количество страниц) - число, количество страниц в книге.

Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц)

- Задание 2: ""Управление списком студентов""

Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

Свойство name (имя) - строка, имя студента.

Свойство age (возраст) - число, возраст студента.

Свойство grade (класс) - строка, класс, в котором учится студент.

Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).


    // Пример использования класса
    const student1 = new Student(""John Smith"", 16, ""10th grade"");
    student1.displayInfo();
    // Вывод:
    // Name: John Smith
    // Age: 16
    // Grade: 10th grade

    const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
    student2.displayInfo();
    // Вывод:
    // Name: Jane Doe
    // Age: 17
    // Grade: 11th grade"

- Необязательная задача

Создать класс "Телефонная книга" с методами для добавления, удаления и поиска контактов по имени или номеру телефона.

    // Пример использования
    let phonebook = new Phonebook();
    phonebook.addContact("Иванов", "123-45-67");
    phonebook.addContact("Петров", "987-65-43");
    console.log(phonebook.findContactByName("Иванов")); // { name: "Иванов", phone: "123-45-67" }
    console.log(phonebook.findContactByPhone("987-65-43")); // { name: "Петров", phone: "987-65-43" }
    phonebook.deleteContact("Иванов");
    console.log(phonebook.contacts); // [{ name: "Петров", phone: "987-65-43" }]



***Урок 3. Объектно-ориентированное программирование в Javascript***

- Задание 1: "Управление персоналом компании"

Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:

Свойство name (имя) - строка, имя сотрудника.

Метод displayInfo() - выводит информацию о сотруднике (имя).

Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:

Свойство department (отдел) - строка, отдел, в котором работает менеджер.

Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).

    // Пример использования классов
    const employee = new Employee(""John Smith"");
    employee.displayInfo();
    // Вывод:
    // Name: John Smith

    const manager = new Manager(""Jane Doe"", ""Sales"");
    manager.displayInfo();
    // Вывод:
    // Name: Jane Doe
    // Department: Sales

- Задание 2. ""Управление списком заказов""

Реализуйте класс Order (заказ), который имеет следующие свойства и методы:

Свойство orderNumber (номер заказа) - число, уникальный номер заказа.

Свойство products (продукты) - массив, содержащий список продуктов в заказе.

Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.

Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.

    // Пример использования класса
    class Product {
    constructor(name, price) {
    this.name = name;
    this.price = price;
    }
    }

    const order = new Order(12345);

    const product1 = new Product(""Phone"", 500);
    order.addProduct(product1);

    const product2 = new Product(""Headphones"", 100);
    order.addProduct(product2);

    console.log(order.getTotalPrice()); // Вывод: 600


- Залание 3. Необязательное задание

Создать класс "Товар" с приватными полями "название", "цена" и "количество". 

Класс должен иметь публичные методы "изменить цену", "изменить количество" и "получить стоимость", которые будут изменять соответствующие поля объекта и возвращать стоимость товара соответственно. 

Также класс должен иметь статическое поле "максимальное количество", которое будет задавать максимально допустимое количество товара для всех создаваемых объектов.

    Пример работы кода:

    const product1 = new Product('Тетрадь', 50, 200);
    console.log(product1.name); // "Тетрадь"
    console.log(product1.price); // 50
    console.log(product1.quantity); // 200
    console.log(product1.getCost()); // 10000

    const product2 = new Product('Ручка', 10, 5000); // выбросится ошибка "Quantity is too high"