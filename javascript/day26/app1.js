let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value.trim(); // Extra spaces remove होंगे
    // if (!country) {
    //     alert("Please enter a country name!"); // Empty input check
    //     return;
    // }
    
    console.log("Fetching universities for:", country);
    
    let colArr = await getColleges(country);
    console.log(colArr);
    show(colArr);
});

async function getColleges(country) {
    try {
        let res = await axios.get(url + country);
        return res.data;
    } catch (e) {
        console.log("Error fetching data:", e);
        return [];
    }
}

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerHTML = ""; // List clear करेगा

    if (colArr.length === 0) {
        list.innerHTML = "<li>No universities found</li>";
        return;
    }

    for (let col of colArr) {
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}
