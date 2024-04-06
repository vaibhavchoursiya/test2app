document.addEventListener("DOMContentLoaded", (e) => {
  const sendData = async () => {
    const response = await fetch("/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        data: "success from frontend",
      }),
    });
    const data = await response.json();
    console.log(data);
  };

  const cl = document.querySelector(".cl");

  cl.addEventListener("click", (e) => {
    cl.innerText += "Hello World";
    sendData();
    // window.location.href = "/home";
  });
});
