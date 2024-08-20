async function fetchUserData(url) {
    try {

        const response = await fetch(url);
        if (!response.ok) {

            throw new Error(`Response status: ${response.status}`);
        }        
        const data = await response.json();
        for (let i in data) {

            var nome = data[i].name;
            if (nome.startsWith("C")) {

                console.log(data[i]);
            }
        }
    } 
    
    catch (error) {

        console.error(error.message)
    }
}
fetchUserData("https://jsonplaceholder.typicode.com/users")