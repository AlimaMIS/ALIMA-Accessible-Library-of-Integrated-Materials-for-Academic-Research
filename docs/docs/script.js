window.onload = () => {
  console.log("ALIMA is ready!");
};
document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Logged in successfully (for testing)!");
    });
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Account created successfully (for testing)!");
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("uploadForm");

  if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const fileInput = document.getElementById("fileInput");
      const status = document.getElementById("uploadStatus");

      if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        status.textContent = `Successfully uploaded: ${file.name}`;
        fileInput.value = ""; // clear the file input
      } else {
        status.textContent = "Please select a file to upload.";
      }
    });
  }
});
function downloadFile(filename) {
  alert(`Pretending to download: ${filename}`);
}
document.addEventListener("DOMContentLoaded", () => {
  const uploadForm = document.getElementById("uploadForm");
  const uploadMessage = document.getElementById("uploadMessage");

  if (uploadForm) {
    uploadForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const filename = document.getElementById("filename").value;

      if (filename.trim() !== "") {
        uploadMessage.textContent = `File "${filename}" uploaded successfully! (simulation)`;
        document.getElementById("filename").value = "";
      } else {
        uploadMessage.textContent = "Please enter a file name.";
      }
    });
  }
});