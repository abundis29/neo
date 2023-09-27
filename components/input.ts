const input = ({ placeholder = '', value = '', type = 'text', onChangeCallback = null, style = {} } = {}) => {
    const inputElement = document.createElement("input");
    inputElement.setAttribute("type", type);
    inputElement.setAttribute("placeholder", placeholder);
    inputElement.value = value;
    inputElement.addEventListener("input", (event) => {
        if (onChangeCallback && typeof onChangeCallback === 'function') {
                //@ts-ignore
            onChangeCallback(event.target.value); // Call the provided callback with the new value
        }
    });
    
    // Apply iOS-like styles to the input
    Object.assign(inputElement.style, {
        padding: '10px',               // Adjust padding for spacing
        border: '1px solid #ccc',     // Add a border
        borderRadius: '5px',          // Add rounded corners
        fontSize: '16px',             // Set font size
        backgroundColor: '#f5f5f5',  // Set background color
    }, style);

    return {
        elements: [inputElement],
        render(container: { appendChild: (arg0: HTMLInputElement) => void; }) {
            if (container instanceof Node) container.appendChild(inputElement);
        },
        // Add other methods if needed
    };
};

// Export the enhanced input component
export default input;
