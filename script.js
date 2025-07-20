const pages = {
  bio: "<p>IT graduate with experience in support and software development. Skilled in databases, APIs, and troubleshooting.</p>",
  experience: "<ul><li>2024: Collins Chabane Local Municipality – In-Service Trainee</li><li>2025: Freelancer – IoT Management</li></ul>",
  education: "<p>2024 - Damelin College<br/>Diploma in IT - NQF Level 6</p>",
  skills: "<ul><li>Hardware: Mobile, Desktop, Support</li><li>Software: ERP, POS, E-commerce, Finance, Travel, GovTech, Health</li></ul>",
  contact: "<p>Email: hlulaninokeri44@gmail.com<br/>Phone: (+27) 71 425 2505</p><p>Social: LinkedIn, YouTube, X, Play Store, Apple Store</p>"
};
document.querySelectorAll('.navBtn').forEach(btn => {
  btn.onclick = () => {
    const content = pages[btn.dataset.page] || "<p>Page not found.</p>";
    document.getElementById('pageContent').innerHTML = content;
  };
});