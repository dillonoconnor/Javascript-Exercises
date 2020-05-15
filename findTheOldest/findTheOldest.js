let findTheOldest = function(array) {
    const oldestFirst = array.sort((a,b) => {
        const ageA = deathAdj(a.yearOfDeath, a.yearOfBirth);
        const ageB = deathAdj(b.yearOfDeath, b.yearOfBirth);
        return ageA > ageB ? -1 : 1;
    });
    return oldestFirst[0]["name"];
}
const deathAdj = (death, birth) => {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
}

module.exports = findTheOldest
