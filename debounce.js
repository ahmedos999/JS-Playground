function debounce(fn, delay) {
  let timeId;
  return function (...args) {
    clearTimeout(timeId);

    timeId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

function search(word) {
  console.log(word);
}

const debouncedSearch = debounce(search, 500);

debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");
debouncedSearch("hell");
debouncedSearch("hello");
