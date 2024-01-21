// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
    title;
    author;
    pages; 

    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    
    displayInfo () {
        console.log(`Название: "${this.title}"\nАвтор: ${this.author}\nКоличество страниц: ${this.pages}\n`);
    };
}
const book1 = new Book("Тихий Дон", " Михаил Шолохов", 1700);
const book2 = new Book("Война и Мир", " Лев Толстой", 1300);

book1.displayInfo(); 
book2.displayInfo(); 


// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// Вывод:
// Name: John Smith
// Age: 16
// Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// Вывод:
// Name: Jane Doe
// Age: 17
// Grade: 11th grade"

class Student {
    name;
    age;
    grade; 

    constructor(name, age, grade){
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
    
    displayInfo () {
        console.log(`Имя: ${this.name}\nВозраст: ${this.age}\nКласс: ${this.grade}\n`);
    };
}
const student1 = new Student("Иван Иванов", 17, "11-й класс");
const student2 = new Student("Виктор Петров", 16, "10-й класс");

student1.displayInfo(); 
student2.displayInfo(); 


