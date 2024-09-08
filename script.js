var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('Skills');
    if (nameElement && emailElement && phoneElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "<h2>Resume</h2>\n   <p>Name: ".concat(name_1, "</p>\n   <p>Email: ").concat(email, "</p>\n   <p>Phone Number: ").concat(phone, "</p>\n   \n   <h2>Education</h2>\n   <p>Education: ").concat(education, "</p>\n\n   <h2>Experience</h2>\n   <p>Education: ").concat(experience, "</p>\n\n   <h2>Skills</h2>\n   <p>Skills: ").concat(skills, "</p>\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('resume output is missing');
        }
        console.log(resumeOutput);
    }
});
