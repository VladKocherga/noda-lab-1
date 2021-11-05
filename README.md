# noda-lab-1

Запустить приложение
$ git clone https://github.com/vladkocherga/https://github.com/VladKocherga/noda-lab-1
$ git checkout lab1
$ npm i
Пример использования:
Инструмент CLI принимает 4 варианта (короткий псевдоним и полное имя):

-t, --task: выбор таска
-i, --input: входной файл
-o, --output: выходной файл
-a, --transform: в номер

input.txt в output.txt в номер телефона
Вводится номер телефона Пример: [1,2,3,4,5,6,7,8,9] или 112345679 в input.txt
node phone.js -t 1 -i "./input.txt" -o "./output.txt" -a transform

2 таск
node phone.js -t 2 -i "./input.txt" -o "./output.txt" -a transform
