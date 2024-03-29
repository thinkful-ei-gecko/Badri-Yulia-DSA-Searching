const store  = [
        { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
        { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
        { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
        { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
        { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
        { author: 'Schmidt, Meinhard', dewey: '005.2762', title: 'Windows Vista for Dummies' },
        { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
        { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
        { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
        { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
    ];

function findabook(store, dewey, title, start, end) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? store.length : end;

      if (start > end) {
          return `book not found`;
      }

      const index = Math.floor((start + end) / 2);
      const deweyQ = store[index].dewey;
      const titleQ = store[index].title;

      if ((deweyQ == dewey) && (titleQ == title)) {
          return index;
      }
      else if ((deweyQ < dewey) || (deweyQ == dewey && titleQ != title)) {
        return findabook(store, dewey, title, index + 1, end);
      }
      else if ((deweyQ > dewey) || (deweyQ == dewey && titleQ != title)) {
        return findabook(store, dewey, title, start, index - 1);
      }
}

console.log(findabook(store, '005.2762122', 'JavaScript: The Definitive Guide'))