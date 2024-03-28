export const pluralizeWord = () => {
  const wordInput = document.getElementById("wordInput");
  const pluralizedWord = document.getElementById("pluralizedWord");
  pluralizedWord.innerText = pluralize(wordInput.value, 5);
};
