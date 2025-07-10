function generateResume() {
  // Get values from form inputs
  const name = document.getElementById("fullName").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const address = document.getElementById("address").value;

  const degree = document.getElementById("degree").value;
  const university = document.getElementById("university").value;
  const gradYear = document.getElementById("gradYear").value;

  const jobTitle = document.getElementById("jobTitle").value;
  const company = document.getElementById("company").value;
  const duration = document.getElementById("duration").value;
  const jobDescription = document.getElementById("jobDescription").value;

  const skills = document.getElementById("skills").value;

  // Generate preview HTML
  const previewHTML = `
    <h3>${name}</h3>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong> ${address}</p>
    
    <h4>Education</h4>
    <p>${degree}, ${university} (${gradYear})</p>
    
    <h4>Experience</h4>
    <p><strong>${jobTitle}</strong> at ${company}</p>
    <p>${duration}</p>
    <p>${jobDescription}</p>
    
    <h4>Skills</h4>
    <p>${skills}</p>
  `;

  // Insert into preview section
  const previewContent = document.getElementById("preview-content");
  previewContent.innerHTML = previewHTML;

  // Show preview section
  document.getElementById("resume-preview").style.display = "block";
}