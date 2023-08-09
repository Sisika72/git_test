const today = new Date();
const thisYear = today.getFullYear();
const footer = document.querySelector('footer');
const copyright = document.createElement('p');
copyright.innerHTML = `Svetlana ${thisYear}`;
footer.appendChild(copyright);

const skills = [
    'HTML',
    'JavaScript',
];
    
const skillsSection = document.getElementById('skills');
const skillsList = skillsSection.querySelector('ul');

for (let i = 0; i < skills.length; i++) {
    const skill = document.createElement('li'); 
    skill.textContent = skills[i]; 
    skillsList.appendChild(skill); 
}