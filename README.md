# ajs-hw6_2
Домашнее задание к лекции «Прототипы, конструкторы» Прототипы

[![Build status](https://ci.appveyor.com/api/projects/status/l6t02adjd6gql422/branch/master?svg=true)](https://ci.appveyor.com/project/Mistel-77/ajs-hw6-2/branch/master)

## Прототипы

### Легенда

Теперь, когда у вас есть функция-конструктор, вы можете воспользоваться возможностями прототипов для реализации общих функций для разных объектов. Давайте реализуем функцию, которая наносит "урон" объекту в результате атаки на него

### Описание

В качестве отправной точки используйте следующую реализацию:
```javascript
function Character(name, type) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.attack = 10;
    this.defence = 40;
}
```

Реализуйте в прототипе Character функцию  `damage(points)`, которая меняет внутреннее состояние объекта (`points` -  это урон, наносимый персонажу). Функция `damage(points)` ничего не возвращает и рассчитывает итоговое изменение жизни персонажа (`health`) по формуле: `health -= points * (1 - defence / 100)`, учитывая, что значение `health >= 0`.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функции, которую вы тестируете.

---
