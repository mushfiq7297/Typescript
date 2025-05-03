//object destructing
const person = {
    name: {
      firstName: 'Mushfiqur',
      lastName: 'Rahman',
    },
    mobile: "01213158966",
    address: 'Canada',
  };

  const { mobile, name: { lastName } } = person;

  const { mobile: phoneNumber, name: { lastName: lName } } = person;

  //array destructing

  const names = ['raha', 'rahim', 'rimon', 'rasha', 'rahman'];

  const [a, b, ...c] = names;