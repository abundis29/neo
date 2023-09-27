const paddedText = (content: string | null, { padding = "16px", style = {} } = {}) => {
    const paddedElement = document.createElement("div");
    paddedElement.textContent = content;
    paddedElement.style.padding = padding;
    Object.assign(paddedElement.style, style); // Apply custom styles

    return {
        elements: [paddedElement],
        render(container: { appendChild: (arg0: HTMLDivElement) => void; }) {
            if (container instanceof Node) container.appendChild(paddedElement);
        },
    };
};

export default paddedText;
