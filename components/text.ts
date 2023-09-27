const text = (contentFunction: () => string | null, { style = {}, ...options } = {}) => {
    const textElement = document.createElement("span");

    const updateText = () => {
        if (typeof contentFunction === 'function') textElement.textContent = contentFunction();
    };

    const applyStyles = () => {
        Object.assign(textElement.style, style);
    };

    const applyFont = (fontSize: string, fontWeight: string) => {
        textElement.style.fontSize = fontSize;
        textElement.style.fontWeight = fontWeight;
    };

    const applyPadding = (padding: string) => {
        textElement.style.padding = padding;
    };

    const applyAllStyles = () => {
        updateText();
        applyStyles();
    };

    updateText();
    applyStyles();

    return {
        elements: [textElement],
        render(container: { appendChild: (arg0: HTMLSpanElement) => void; }) {
            if (container instanceof Node) container.appendChild(textElement);
        },
        font: (fontSize: any, fontWeight: any) => {
            applyFont(fontSize, fontWeight);
            applyAllStyles();
            return {
                ...options,
                font: applyFont,
                padding: applyPadding,
            };
        },
        padding: (padding: any) => {
            applyPadding(padding);
            applyAllStyles();
            return {
                ...options,
                font: applyFont,
                padding: applyPadding,
            };
        },
        ...options, // Include any additional options
    };
};

export default text;
