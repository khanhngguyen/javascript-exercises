const findTheOldest = function(arr) {
    //if person is still living, there's no yearOfDeath --> find their age
    const findAge = function(birth, death) {
        if (!death) {
            death = new Date().getFullYear();
        }
        return death - birth;
    }

    let oldestAge = 0; 
    let x = 0;
    for (let i = 0; i < arr.length; i++) {
        let personAge = findAge(arr[i].yearOfBirth, arr[i].yearOfDeath);
        if (personAge > oldestAge) {
            oldestAge = personAge;
            x = i;
        }
    }
    return arr[x];

    /* const result = arr.reduce((oldest, person) => {
        //get oldest age until current person
        const oldestAge = findAge(oldest.yearOfBirth, oldest.yearOfDeath);
        //get current person age
        const personAge = findAge(person.yearOfBirth, person.yearOfDeath);
        return oldestAge > personAge ? oldest : person
    })
    return result; */
};

// Do not edit below this line
module.exports = findTheOldest;
