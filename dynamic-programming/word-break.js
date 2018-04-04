// Given a non-empty string s and a dictionary wordDict containing a list of non-empty words,
// determine if s can be segmented into a space-separated sequence of one or more dictionary words.
// You may assume the dictionary does not contain duplicate words.
//
// For example, given s = "leetcode", dict = ["leet", "code"].
// Return true because "leetcode" can be segmented as "leet code".

const isInDictionary = (str, dictionary) =>
  dictionary.some(word => word === str);

const wordBreak = (str, dictionary) => {
  // сохранить позицию найденного слова
  // открытая позиция 0 дает возможность проверять всю строку от 0 до i
  let foundWords = [true];

  for (let i = 1; i <= str.length; i++) {
    // проверить варианты от 0 до i учитывая найденные слова
    for (let j = 0; j < i; j++) {
      // проверяем если позиция открыта. это нужно для того что бы искать либо все слово
      // либо начиная с найденого слова
      // например в строке abc, a - ненайдено и при i = 3 можем рассмотреть отрезки
      // abc и но не bc так как а остается закрытым
      if (foundWords[j] && isInDictionary(str.slice(j, i), dictionary)) {
        foundWords[i] = true;
        break;
      }
    }
  }

  return !!foundWords[str.length];
};
