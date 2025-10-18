**Разница между Type и Interface**  
Пользовались type, потому что с ним удобнее работать: краткий синтаксис и больше  
возможностей: Union Types(let myVar: number | string;), Intersection Types

Создание массива со строками и числами:  
let mixedArray: (string | number)[] = ["foo", 1, "bar", 2];

Interface для обьектов  
Type для всего

//  
//  
//

**Отличия Type от Interface**
Тип имеет обьединение, пересечение, описывает обьекты, массивы и любые структуры
Интерфейсы обьединяются через наследования через 'extends', описывает обьекты

//  
//  
//

**Дженерики**
Переменная для типа
как в функцию пепедаются аргументы, так-же в дженерик передается тип

//  
//  
//

**Intersection Types**
(((((
type Person = {
name: string;
age: number;
};

type Employee = {
id: number;
department: string;
};

type EmployeePerson = Person & Employee;
)))))

//  
//  
//

**Utility types:**
Это утилиты которые предназначены для создания новых типов на основе других
● Awaited<T> – для асинхронных запросов
● Partial<T> – Свойства текущего типа делает опциональным
● Required<T> – Свойства текущего типа делает строго обязательными.
● Readonly<T> – Утилиты преобразует все свойства типа, делает их
недоступными для переназначения с использованием нового значения.
● Record<T, U> – Утилита нужна для создания типа объекта, Record<Key, Type>,
где Key – имена свойств объекта, а Type – типы значений свойств.
● Pick<T, 'key1' | 'key2'> – Утилита нужна для создания нового типа из выбранных
свойств объекта.
● Omit<T, 'key1' | 'key2'> – Утилита нужна для создания нового типа из
оставшихся

//  
//  
//

**Что такое Type Guards в Typescript? тайпгуардс**
Если тип не определен или неизвестен, то на помощь приходит “Защита типов”:
● typeof – узнать какой тип
● in – есть ли свойство в объекте
● instanceof – Оператор экземпляра проверяет появляется ли свойство
прототипа конструктора где-нибудь в цепочке прототипов объекта
● is
● keyof

//  
//  
//

**Что такое enum?**
● Enum (перечисление) в TypeScript - это специальный тип данных, который позволяет
задать именованные константы.

Использовали, но редко из-за проблем с перформансом,
тк они получаются сильно толще чем обычный обьект, я к тому,
что если все делать как ENUM то это сильно утяжелит бандл

тк Каждый enum После компиляции — это отдельная самовызывающяся функция + объект, а не просто литерал
Код из-за этого сильно дублируется + Tree-shaking (удаление неиспользуемого кода) не работает с enum
Как-то мы даже переписали часть енамов и выйграли в районе 5-10 КБ
а это для нас чувствительно тк приоритет — минимум загрузочного JS.

//  
//  
//

namespace
namespace MyModule {
export let myVariable: string = "Hello, world";

export function myFunction() {
console.log(myVariable);
}
}
// другой компонент
import \* as MyModule from './myModule';

console.log(MyModule.myVariable); // Output: "Hello, world"
MyModule.myFunction(); // Output: "Hello, world"

//  
//  
//

**Создание компонента**  
interface INotAllowedPateProps {  
title: string;  
message: string;  
}  
export const NotAlowedPage = ({ title, message }: INotAllowedPateProps) => {
//some logic

    return (
        <>
            <Header />
        </>
    );

};

//  
//  
//

**Nullbale**

type UserForm = {  
 name: Nullable`<string>`;  
 age: number;  
 email: string  
}

type Nullable`<T>` = null | T

const user: UserForm = {  
name: null;  
age: 14;  
email: fgsg@mail.ru  
}

сатисфайд ???????????????????????????????????????????????????????????????????????????
