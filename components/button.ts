const button = (label: string | null, onClick: (this: HTMLButtonElement, ev: MouseEvent) => any, { style = {} } = {}) => {
    const buttonElement = document.createElement("button");
    buttonElement.textContent = label;

    // Add an optional click event handler
    if (typeof onClick === 'function') {
        buttonElement.addEventListener('click', onClick);
    }

    // Apply iOS-style button styles
    Object.assign(buttonElement.style, {
        backgroundColor: '#007AFF', // iOS blue color
        color: 'white',
        padding: '10px 20px',
        borderRadius: '8px', // Slight border radius
        fontSize: '16px',
        cursor: 'pointer', // Add a pointer cursor for interaction
        border: 'none', // Remove button border

        fontWeight: 'bold', // Make the text bold
        textTransform: 'uppercase', // Uppercase text
        ...style, // Merge with any additional styles passed as a parameter
    });

    return {
        elements: [buttonElement],
        render(container: { appendChild: (arg0: HTMLButtonElement) => void; }) {
            if (container instanceof Node) {
                container.appendChild(buttonElement);
            }
        },
    };
};

export default button;
