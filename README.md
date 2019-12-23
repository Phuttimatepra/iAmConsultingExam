<<<<<<< HEAD
# My Source Code

let word = "deleveled";
console.log(word, isPalindrome(word));
function isPalindrome(str) {
  let mid = Math.floor(str.length / 2);
  let round = 0, temp = 0;
  for (let i = 0; i <= mid; i++) {
    round++;
    if (str[i] != str[str.length - i - 1]) {
      temp--;
    }
    temp++;
  }
  if (temp == round)
    return true;
  else
    return false;
}


# PalindromeOrNot

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
=======
# iAmConsultingExam
isPalindrome exam
>>>>>>> 7ececab7b6be400aaa0481722601f1cd60f9b1da
