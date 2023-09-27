const image = (src: string, { style = {}, ...styles } = {}) => {
    const imageElement = document.createElement("img");
    imageElement.src = src;
    imageElement.style.maxWidth = "100%";
    imageElement.style.height = "auto";

    // Spread the additional styles into the style object
    Object.assign(imageElement.style, style, { ...styles });

    return {
        elements: [imageElement],
        render(container: { appendChild: (arg0: HTMLImageElement) => void; }) {
            if (container instanceof Node) container.appendChild(imageElement);
        },
    };
};

export default image;