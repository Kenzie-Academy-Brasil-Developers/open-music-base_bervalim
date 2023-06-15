/* Desenvolva sua lógica aqui ... */
export const renderDarkMode = () => {
  const darkModeButton = document.querySelector(".header__button");
  const htmlDarkMode = document.querySelector(".dark__mode");
  const spanButton = document.querySelector(".material-symbols-outlined");
  const theme = JSON.parse(localStorage.getItem("darkMode"));

  if (theme) {
    spanButton.innerHTML = "light_mode";
    htmlDarkMode.classList.add("dark__mode");
  } else {
    spanButton.innerHTML = "nightlight";
    htmlDarkMode.classList.remove("dark__mode");
  }

  darkModeButton.addEventListener("click", () => {
    htmlDarkMode.classList.toggle("dark__mode");

    if (htmlDarkMode.classList.contains("dark__mode")) {
      spanButton.innerHTML = "light_mode";
      localStorage.setItem("darkMode", true);
    } else {
      spanButton.innerHTML = "nightlight";
      localStorage.setItem("darkMode", false);
    }
  });
};
