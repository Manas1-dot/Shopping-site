(function () {
  function injectButton() {
    const container = document.getElementById("product-page");

    if (container) {
      createButton(container);
    }
  }

  function createButton(container) {
    // Check if button already exists to avoid duplicates
    if (document.getElementById("add-to-quote-btn")) return;

    // Create the button element
    const button = document.createElement("button");
    button.id = "add-to-quote-btn";
    button.innerText = "Add to Quote";
    button.style =
      "background-color: blue; color: white; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px; width: 100%;";

    // Handle Click Event - Save to Browser Storage
    button.addEventListener("click", function () {
      const productData = {
        id: document.querySelector(".product-id")?.innerText || "12345",
        name:
          document.querySelector(".product-name")?.innerText || "Winter Jacket",
        price: document.querySelector(".product-price")?.innerText || "$99",
      };

      // Save to sessionStorage
      const quotes = JSON.parse(sessionStorage.getItem("quotes")) || [];
      quotes.push(productData);
      sessionStorage.setItem("quotes", JSON.stringify(quotes));

      // Open iframe popup
      openQuotePopup(productData);
    });

    // Append button to the container
    container.appendChild(button);
  }

  function openQuotePopup(productData) {
    const iframe = document.createElement("iframe");
    iframe.src = "https://assignment-puce-iota.vercel.app/"; // The iframe is running on port 3000
    iframe.style =
      "position: fixed; width: 1000px; height: 800px; top: 50%; left: 50%; transform: translate(-50%, -50%); border: 1px solid #ccc; background: white; z-index: 1000;";

    // Append iframe to body
    document.body.appendChild(iframe);
  }

  // Run the script immediately
  injectButton();
})();
