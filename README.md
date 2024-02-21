# Typo Tolerance

Typo tolerance is a searching feature where users are less prone to typos when typing in a hurry.  
This feature is made possible by **[Levenshtein Algoritm](https://en.wikipedia.org/wiki/Levenshtein_distance)** found by Vladimir Levenshtein which compare the distance of two strings.

## Example

Apple and Appel are sometimes mistyped by most people.  
This could be handled by comparing how many characters are mismatching in both of them.

### Solution

- The Levenshtein Algorithm will first compare the 3 leading characters i.e [A, p, p].
  <br>
  Because there is no difference in 3 leading characters for both of the word, hence the current distance is 0.
- Next, we can see that [l, e] and [e, l] are misplaced.
  <br>
  The Algorithm will save the index of each characters and count how far the indexes separated each other.
  <br>
  In short, Levenshtein will carry forward the [e] in Appel to the last index ([A, p, p, e, l] into [A, p, p, l, e]).
- That's it, now both of the word are identically the same (Apple and Apple).

## Technologies Used In Developing
- [x] [Bulma CSS](https://bulma.io)
- [x] [JQuery](https://jquery.com/)
- [x] [Levenshtein.js](https://github.com/gustf/js-levenshtein)
