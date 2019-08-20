const people = [
  {
    name: 'Fred',
    age: 27,
    interests: [
      'bowling',
      'golf',
    ],
  },
  {
    name: 'Wilma',
    age: 25,
    interests: [
      'running',
      'cinema',
    ],
  },
  {
    name: 'Barney',
    age: 28,
    interests: [
      'bowling',
      'running',
      'swimming',
    ],
  }
];

describe('getNamesOfPeopleOver', () => {
  const getNamesOfPeopleOver = limit => {
    // TODO: Complete this function to allow the test to pass
    return people.filter((item) => {
      return item.age > limit;
    }).map((item) => {
      return item.name;
    });
  };

  it('returns an array of the names of all people over the given age', () => {
    assert.deepEqual(getNamesOfPeopleOver(26), ['Fred', 'Barney']);
  });
});

describe('getSumOfAllAges', () => {
  const getSumOfAllAges = () => {
    // TODO: Complete this function to allow the test to pass
    let sumOfAges = 0;
    people.forEach((item) => {
      sumOfAges += item.age;
    })
    return sumOfAges;
  };

  it('calculates the sum of all ages', () => {
    assert.equal(getSumOfAllAges(), 80);
  });
});

describe('getInterests', () => {
  const getInterests = () => {
    // TODO: Complete this function to allow the test to pass

    let allInterests = [];

    people.forEach((item) => {
      item.interests.forEach(val => allInterests.push(val));
    });

    return allInterests.filter((index, item) => allInterests.indexOf(index) === item).sort();

  };

  it('returns a array of all interests, no duplicates, sorted', () => {
    assert.deepEqual(getInterests(), ['bowling', 'cinema', 'golf', 'running', 'swimming']);
  });
});

describe('getNamesAndInterests', () => {
  const getNamesAndInterests = () => {
    // TODO: Complete this function to allow the test to pass
    let namesAndIntrests = {};
    people.forEach(item => {
      namesAndIntrests[item.name] = item.interests;
    });
    return namesAndIntrests;
  };

  it('returns an object with the names as keys, and the interests as values', () => {
    const expected = {
      Fred: [
        'bowling',
        'golf',
      ],
      Wilma: [
        'running',
        'cinema',
      ],
      Barney: [
        'bowling',
        'running',
        'swimming',
      ],
    };

    assert.deepEqual(getNamesAndInterests(), expected);
  });
});
