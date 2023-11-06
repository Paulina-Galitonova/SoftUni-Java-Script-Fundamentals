function partyTime(input) {
    let guests = input.slice(0, input.indexOf('PARTY'));
    let attendees = input.slice(input.indexOf('PARTY') + 1);
  
    let vipGuests = [];
    let regularGuests = [];
  
    guests.forEach((guest) => {
      if (guest[0].match(/\d/)) {
        vipGuests.push(guest);
      } else {
        regularGuests.push(guest);
      }
    });
  
    attendees.forEach((attendee) => {
      if (attendee[0].match(/\d/)) {
        vipGuests = vipGuests.filter((guest) => guest !== attendee);
      } else {
        regularGuests = regularGuests.filter((guest) => guest !== attendee);
      }
    });
  
    let allGuests = vipGuests.concat(regularGuests);
  
    console.log(allGuests.length);
    console.log(allGuests.join('\n'));
  }
  
  // Example usage:
  partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
  ]);