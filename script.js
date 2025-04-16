const contentBox = document.getElementById("contentBox");

const contentData = {
  research: `
    <h2>AREAS OF RESEARCH</h2>
    <ul>
      <li>Structural Optimization</li>
      <li>Non-Linear Structural Mechanics</li>
      <li>Finite Element Analysis</li>
      <li>Earthquake Engineering</li>
      <li>Concrete Technology</li>
    </ul>
  `,
  education: `<h2>EDUCATIONAL QUALIFICATION</h2><p>[Insert educational background here]</p>`,
  admin: `<h2>ADMINISTRATIVE RESPONSIBILITIES</h2><p>[Insert responsibilities]</p>`,
  employment: `<h2>EMPLOYMENT</h2><p>[Insert employment history]</p>`,
  courses: `<h2>MAJOR COURSES TAUGHT</h2><p>[Insert courses]</p>`,
  awards: `<h2>AWARDS / BOOKS</h2><p>[Insert honors, books, etc.]</p>`,
  projects: `<h2>SPONSORED PROJECTS</h2><p>[Insert projects]</p>`,
  consultancy: `<h2>MAJOR CONSULTANCY PROJECTS</h2><p>[Insert consultancy work]</p>`,
  memberships: `<h2>MEMBERSHIP OF PROFESSIONAL BODIES</h2><p>[Insert memberships]</p>`,
  publications: `<h2>PUBLICATIONS</h2><p>[Insert publications]</p>`,
  conferences: `<h2>CONFERENCES AND PROCEEDINGS</h2><p>[Insert conferences]</p>`,
  talks: `<h2>TALKS / LECTURES</h2><p>[Insert invited talks, papers, etc.]</p>`,
  mtech: `<h2>LIST OF SUPERVISED M.TECH. THESIS</h2><p>[Insert thesis list]</p>`,
  phd: `<h2>LIST OF SUPERVISED PhD THESIS</h2><p>[Insert thesis list]</p>`,
  recent: `<h2>RECENT SELECTED PUBLICATIONS</h2><p>[Insert recent publications]</p>`,
  moreawards: `<h2>ADDITIONAL AWARDS / SCHOLARSHIPS</h2><p>[Insert more awards]</p>`
};

document.querySelectorAll(".menu-items button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".menu-items button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const key = btn.getAttribute("data-target");

    // Animate fade out & in
    contentBox.style.opacity = 0;
    setTimeout(() => {
      contentBox.innerHTML = contentData[key] || "<h2>Section not found</h2>";
      contentBox.style.opacity = 1;
    }, 200);
  });
});
const menuStrip = document.getElementById("menuStrip");
const scrollLeft = document.getElementById("scrollLeft");
const scrollRight = document.getElementById("scrollRight");

scrollLeft.addEventListener("click", () => {
  menuStrip.scrollBy({ left: -200, behavior: 'smooth' });
});

scrollRight.addEventListener("click", () => {
  menuStrip.scrollBy({ left: 200, behavior: 'smooth' });
});
