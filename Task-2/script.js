         // Smooth Scroll
function scrollToContact() {
    document.getElementById("contact").scrollIntoView({
        behavior: "smooth"
    });
}

         // Contact Form Validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

             // Inputs
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

            // Error Elements
    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const phoneError = document.getElementById("phoneError");
    const messageError = document.getElementById("messageError");

             // Clear Errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

             // Name Validation
    if (name === "") {

        nameError.textContent = "Name is required";
        valid = false;

    }

             // Email Validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required";
        valid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Enter a valid email";
        valid = false;

    }

             // Phone Validation
    const phonePattern = /^[0-9]{10}$/;

    if (phone === "") {

        phoneError.textContent = "Phone number is required";
        valid = false;

    } else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Phone number must be 10 digits";

        valid = false;

    }

             // Message Validation
    if (message === "") {

        messageError.textContent =
            "Message cannot be empty";

        valid = false;

    }

              // Success
    if (valid) {

        alert("Form Submitted Successfully!");

        form.reset();

    }

});

          // Dynamic To-Do List
const addTaskBtn =
    document.getElementById("addTaskBtn");

const taskInput =
    document.getElementById("taskInput");

const taskList =
    document.getElementById("taskList");

         // Add Task
addTaskBtn.addEventListener("click", function () {

    const task = taskInput.value.trim();

    if (task === "") {

        alert("Please enter a task.");

        return;

    }

    const li = document.createElement("li");

             // Task Text
    const span = document.createElement("span");

    span.textContent = task;

    li.appendChild(span);

             // Button Container
    const actions = document.createElement("div");

    actions.className = "actions";

             // Complete Button
    const completeBtn =
        document.createElement("button");

    completeBtn.textContent = "Complete";

    completeBtn.className = "complete";

    completeBtn.onclick = function () {

        span.classList.toggle("completed");

    };

             // Delete Button
    const deleteBtn =
        document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.className = "delete";

    deleteBtn.onclick = function () {

        li.remove();

    };

    actions.appendChild(completeBtn);

    actions.appendChild(deleteBtn);

    li.appendChild(actions);

    taskList.appendChild(li);

    taskInput.value = "";

});
