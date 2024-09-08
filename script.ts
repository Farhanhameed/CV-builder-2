document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;
    const skillsElement = document.getElementById('Skills') as HTMLInputElement;

    if (nameElement && emailElement && phoneElement && experienceElement && skillsElement){
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;
        const skills = skillsElement.value;

    const resumeOutput = `<h2>Resume</h2>
   <p>Name: ${name}</p>
   <p>Email: ${email}</p>
   <p>Phone Number: ${phone}</p>
   
   <h2>Education</h2>
   <p>Education: ${education}</p>

   <h2>Experience</h2>
   <p>Education: ${experience}</p>

   <h2>Skills</h2>
   <p>Skills: ${skills}</p>
    `;
    
    const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement){
            resumeOutputElement.innerHTML = resumeOutput
        }
        else{
            console.error('resume output is missing')
        }
        console.log(resumeOutput)
    }

})