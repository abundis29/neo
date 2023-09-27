const styledText = (content: string | null, { fontSize = "16px", fontWeight = "normal", padding = "0px", style = {} } = {}) => {
    const textElement = document.createElement("span");
    textElement.textContent = content;
    textElement.style.fontSize = fontSize;
    textElement.style.fontWeight = fontWeight;
    textElement.style.padding = padding;
    Object.assign(textElement.style, style); // Apply custom styles

    return {
        elements: [textElement],
        render(container: { appendChild: (arg0: HTMLSpanElement) => void; }) {
            if (container instanceof Node) container.appendChild(textElement);
        },
    };
};

export default styledText;
