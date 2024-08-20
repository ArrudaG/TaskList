function groupByCategory(array){

    const categoryList = array.reduce((group, product) => {

        const { category } = product;
        group[category] = group[category] || [];
        group[category].push(product);
        return group;
    }, {});

    return categoryList;
}

const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' }
];
console.log(groupByCategory(items));