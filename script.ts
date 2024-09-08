// // Add an event listener to the resume form to handle submission
document
  .getElementById("resumeForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameEle = document.getElementById("name") as HTMLInputElement;
    const emailEle = document.getElementById("email") as HTMLInputElement;
    const contactNoEle = document.getElementById(
      "contactNo"
    ) as HTMLInputElement;
    const educationEle = document.getElementById(
      "education"
    ) as HTMLInputElement;
    const experienceEle = document.getElementById(
      "experience"
    ) as HTMLInputElement;
    const skillsEle = document.getElementById("skills") as HTMLInputElement;

    if (
      nameEle &&
      emailEle &&
      contactNoEle &&
      educationEle &&
      experienceEle &&
      skillsEle
    ) {
      const name = nameEle.value;
      const email = emailEle.value;
      const contactNo = contactNoEle.value;
      const education = educationEle.value;
      const experience = experienceEle.value;
      const skills = skillsEle.value;

      const resumeOutput = `
        <h1>Resume</h1>
        <p><b>Name:</b> <span id="nameOutput">${name}</span></p>
        <p><b>Email:</b> <span id="emailOutput">${email}</span></p>
        <p><b>Contact No:</b> <span id="contactNoOutput">${contactNo}</span></p>
        <h3>Education:</h3>
        <p id="educationOutput">${education}</p>
        <h3>Experience:</h3>
        <p id="experienceOutput">${experience}</p>
        <h3>Skills:</h3>
        <p id="skillsOutput">${skills}</p>
        <button id="editButton">Edit</button>
        <button id="saveButton">Save</button>
      `;

      const outputElement = document.getElementById("resumeOutput");
      if (outputElement) {
        outputElement.innerHTML = resumeOutput;

        const editButton = document.getElementById("editButton");
        const saveButton = document.getElementById("saveButton");

        if (editButton && saveButton) {
          editButton.addEventListener("click", function () {
            // Make only specific elements editable
            document.getElementById("nameOutput")?.setAttribute("contenteditable", "true");
            document.getElementById("emailOutput")?.setAttribute("contenteditable", "true");
            document.getElementById("contactNoOutput")?.setAttribute("contenteditable", "true");
            document.getElementById("educationOutput")?.setAttribute("contenteditable", "true");
            document.getElementById("experienceOutput")?.setAttribute("contenteditable", "true");
            document.getElementById("skillsOutput")?.setAttribute("contenteditable", "true");

            editButton.style.display = "none";
            saveButton.style.display = "inline-block";
          });

          saveButton.addEventListener("click", function () {
            const nameOutput = document.getElementById("nameOutput")?.innerText;
            const emailOutput = document.getElementById("emailOutput")?.innerText;
            const contactNoOutput = document.getElementById("contactNoOutput")?.innerText;
            const educationOutput = document.getElementById("educationOutput")?.innerText;
            const experienceOutput = document.getElementById("experienceOutput")?.innerText;
            const skillsOutput = document.getElementById("skillsOutput")?.innerText;

            if (nameEle && nameOutput) nameEle.value = nameOutput;
            if (emailEle && emailOutput) emailEle.value = emailOutput;
            if (contactNoEle && contactNoOutput) contactNoEle.value = contactNoOutput;
            if (educationEle && educationOutput) educationEle.value = educationOutput;
            if (experienceEle && experienceOutput) experienceEle.value = experienceOutput;
            if (skillsEle && skillsOutput) skillsEle.value = skillsOutput;

            // Make the elements non-editable again
            document.getElementById("nameOutput")?.removeAttribute("contenteditable");
            document.getElementById("emailOutput")?.removeAttribute("contenteditable");
            document.getElementById("contactNoOutput")?.removeAttribute("contenteditable");
            document.getElementById("educationOutput")?.removeAttribute("contenteditable");
            document.getElementById("experienceOutput")?.removeAttribute("contenteditable");
            document.getElementById("skillsOutput")?.removeAttribute("contenteditable");

            editButton.style.display = "inline-block";
            saveButton.style.display = "none";
          });
        }
      } else {
        console.error("Unable to display the resume. The output element is missing.");
      }
    } else {
      console.error("Error: Please fill out all the required fields.");
    }
  });
