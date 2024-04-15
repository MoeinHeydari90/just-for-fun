const classmates = JSON.parse(data); // Create an object from the data

let remainingClassmates = [...classmates]; // Create a copy of classmates array

const container = document.getElementById("classmate-container");
for (let i = 0; i < classmates.length; i++) {
    const classmate = classmates[i];

    const classmateDiv = document.createElement("div");
    classmateDiv.classList.add("classmate");

    classmateDiv.title = `${classmate.name}`;

    const img = document.createElement("img");
    img.src = classmate.img;
    img.alt = `${classmate.name} ${classmate.last_name}`;

    classmateDiv.appendChild(img);
    container.appendChild(classmateDiv);

    // Add event listener to remove div when clicked
    classmateDiv.addEventListener("click", function () {
        this.remove();
        remainingClassmates = remainingClassmates.filter(
            (x) => x.id !== classmate.id
        ); // Remove clicked classmate from remainingClassmates
    });
}

const chooseButton = document.getElementById("choose-button");
const chosenClassmateContainer = document.getElementById(
    "chosen-classmate-container"
);
chooseButton.addEventListener("click", function () {
    if (remainingClassmates.length > 0) {
        const randomIndex = Math.floor(
            Math.random() * remainingClassmates.length
        );
        const chosenClassmate = remainingClassmates[randomIndex];
        chosenClassmateContainer.innerHTML = ""; // Clear previous content
        const chosenClassmateDiv = document.createElement("div");
        chosenClassmateDiv.classList.add("chosen-classmate");

        const chosenImg = document.createElement("img");
        chosenImg.src = chosenClassmate.img;
        chosenImg.alt = `${chosenClassmate.name} ${chosenClassmate.last_name}`;

        const chosenName = document.createElement("p");
        chosenName.textContent = `${chosenClassmate.name}`;

        chosenClassmateDiv.appendChild(chosenImg);
        chosenClassmateDiv.appendChild(chosenName);
        chosenClassmateContainer.appendChild(chosenClassmateDiv);
        chosenClassmateDiv.title = chosenName.textContent;
    } else {
        chosenClassmateContainer.textContent = "No classmates remaining.";
    }
});
