const getFirstTwoParagraphs = (html) => {
  if (!html || typeof html !== "string") return "";

  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = html;

  const paragraphs = tempDiv.querySelectorAll("p");

  if (paragraphs.length >= 2) {
    return paragraphs[0].outerHTML + paragraphs[1].outerHTML;
  } else if (paragraphs.length === 1) {
    return paragraphs[0].outerHTML;
  } else {
    const textContent = tempDiv.textContent || "";
    return `<p>${textContent.slice(0, 300)}${
      textContent.length > 300 ? "..." : ""
    }</p>`;
  }
};

export { getFirstTwoParagraphs };
