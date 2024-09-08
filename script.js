var _a;
// // Add an event listener to the resume form to handle submission
(_a = document
    .getElementById("resumeForm")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    var nameEle = document.getElementById("name");
    var emailEle = document.getElementById("email");
    var contactNoEle = document.getElementById("contactNo");
    var educationEle = document.getElementById("education");
    var experienceEle = document.getElementById("experience");
    var skillsEle = document.getElementById("skills");
    if (nameEle &&
        emailEle &&
        contactNoEle &&
        educationEle &&
        experienceEle &&
        skillsEle) {
        var name_1 = nameEle.value;
        var email = emailEle.value;
        var contactNo = contactNoEle.value;
        var education = educationEle.value;
        var experience = experienceEle.value;
        var skills = skillsEle.value;
        var resumeOutput = "\n        <h1>Resume</h1>\n        <p><b>Name:</b> <span id=\"nameOutput\">".concat(name_1, "</span></p>\n        <p><b>Email:</b> <span id=\"emailOutput\">").concat(email, "</span></p>\n        <p><b>Contact No:</b> <span id=\"contactNoOutput\">").concat(contactNo, "</span></p>\n        <h3>Education:</h3>\n        <p id=\"educationOutput\">").concat(education, "</p>\n        <h3>Experience:</h3>\n        <p id=\"experienceOutput\">").concat(experience, "</p>\n        <h3>Skills:</h3>\n        <p id=\"skillsOutput\">").concat(skills, "</p>\n        <button id=\"editButton\">Edit</button>\n        <button id=\"saveButton\">Save</button>\n      ");
        var outputElement = document.getElementById("resumeOutput");
        if (outputElement) {
            outputElement.innerHTML = resumeOutput;
            var editButton_1 = document.getElementById("editButton");
            var saveButton_1 = document.getElementById("saveButton");
            if (editButton_1 && saveButton_1) {
                editButton_1.addEventListener("click", function () {
                    var _a, _b, _c, _d, _e, _f;
                    // Make only specific elements editable
                    (_a = document.getElementById("nameOutput")) === null || _a === void 0 ? void 0 : _a.setAttribute("contenteditable", "true");
                    (_b = document.getElementById("emailOutput")) === null || _b === void 0 ? void 0 : _b.setAttribute("contenteditable", "true");
                    (_c = document.getElementById("contactNoOutput")) === null || _c === void 0 ? void 0 : _c.setAttribute("contenteditable", "true");
                    (_d = document.getElementById("educationOutput")) === null || _d === void 0 ? void 0 : _d.setAttribute("contenteditable", "true");
                    (_e = document.getElementById("experienceOutput")) === null || _e === void 0 ? void 0 : _e.setAttribute("contenteditable", "true");
                    (_f = document.getElementById("skillsOutput")) === null || _f === void 0 ? void 0 : _f.setAttribute("contenteditable", "true");
                    editButton_1.style.display = "none";
                    saveButton_1.style.display = "inline-block";
                });
                saveButton_1.addEventListener("click", function () {
                    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
                    var nameOutput = (_a = document.getElementById("nameOutput")) === null || _a === void 0 ? void 0 : _a.innerText;
                    var emailOutput = (_b = document.getElementById("emailOutput")) === null || _b === void 0 ? void 0 : _b.innerText;
                    var contactNoOutput = (_c = document.getElementById("contactNoOutput")) === null || _c === void 0 ? void 0 : _c.innerText;
                    var educationOutput = (_d = document.getElementById("educationOutput")) === null || _d === void 0 ? void 0 : _d.innerText;
                    var experienceOutput = (_e = document.getElementById("experienceOutput")) === null || _e === void 0 ? void 0 : _e.innerText;
                    var skillsOutput = (_f = document.getElementById("skillsOutput")) === null || _f === void 0 ? void 0 : _f.innerText;
                    if (nameEle && nameOutput)
                        nameEle.value = nameOutput;
                    if (emailEle && emailOutput)
                        emailEle.value = emailOutput;
                    if (contactNoEle && contactNoOutput)
                        contactNoEle.value = contactNoOutput;
                    if (educationEle && educationOutput)
                        educationEle.value = educationOutput;
                    if (experienceEle && experienceOutput)
                        experienceEle.value = experienceOutput;
                    if (skillsEle && skillsOutput)
                        skillsEle.value = skillsOutput;
                    // Make the elements non-editable again
                    (_g = document.getElementById("nameOutput")) === null || _g === void 0 ? void 0 : _g.removeAttribute("contenteditable");
                    (_h = document.getElementById("emailOutput")) === null || _h === void 0 ? void 0 : _h.removeAttribute("contenteditable");
                    (_j = document.getElementById("contactNoOutput")) === null || _j === void 0 ? void 0 : _j.removeAttribute("contenteditable");
                    (_k = document.getElementById("educationOutput")) === null || _k === void 0 ? void 0 : _k.removeAttribute("contenteditable");
                    (_l = document.getElementById("experienceOutput")) === null || _l === void 0 ? void 0 : _l.removeAttribute("contenteditable");
                    (_m = document.getElementById("skillsOutput")) === null || _m === void 0 ? void 0 : _m.removeAttribute("contenteditable");
                    editButton_1.style.display = "inline-block";
                    saveButton_1.style.display = "none";
                });
            }
        }
        else {
            console.error("Unable to display the resume. The output element is missing.");
        }
    }
    else {
        console.error("Error: Please fill out all the required fields.");
    }
});
