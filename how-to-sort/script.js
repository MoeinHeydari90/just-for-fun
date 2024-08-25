const originalClassmates = JSON.parse(data); // create a variable by our data file
let sortedClassmates = []; // Initialize an empty array for sorted classmates
let isSorted = false; // Keep track of the current sort state

const container = document.getElementById("classmate-container");

// Function to create classmate elements
function createClassmateElements(classmatesArray) {
    container.innerHTML = ""; // Clear previous content

    classmatesArray.forEach((classmate) => {
        const classmateDiv = document.createElement("div");
        classmateDiv.classList.add("classmate");
        classmateDiv.title = `${classmate.name}`;

        const img = document.createElement("img");
        img.src = classmate.img;
        img.alt = `${classmate.name} ${classmate.last_name}`;

        classmateDiv.appendChild(img);
        container.appendChild(classmateDiv);
    });
}

// Initial creation of classmate elements
createClassmateElements(originalClassmates);

// Function to sort classmates by sex
function sortBySex() {
    if (!isSorted) {
        sortedClassmates = originalClassmates.slice().sort((a, b) => {
            return a.sex.localeCompare(b.sex);
        });
        createClassmateElements(sortedClassmates);
        isSorted = true;
    } else {
        createClassmateElements(originalClassmates);
        isSorted = false;
    }
}
