import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PalindromeOrNot';
}

// !  No.2 ===================================================

// ! ======================= Javascript =================

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