function transformData (x) {
    newArray = []

    for (let i in x) {

        if (x[i].isActive == true) {

            delete x[i].age;
            delete x[i].isActive;
            newArray.push(x[i]);
        }
    }

    newArray.sort(function(a, b) {

        return a.name.localeCompare(b.name);
    })

    console.log(newArray);
}
const users = [
    { id: 2, name: 'Bob', age: 30, isActive: false },
    { id: 3, name: 'Charlie', age: 22, isActive: true },
    { id: 1, name: 'Alice', age: 25, isActive: true }
];
transformData(users)