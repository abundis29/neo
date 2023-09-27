const vStack = ({ spacing = 0, alignment = "center", style = {}, ...options }: any, children: any[]) => {
    const stackContainer = document.createElement("div");
    Object.assign(stackContainer.style, style, {
        display: "flex",
        flexDirection: "column",
        alignItems: alignment,
        gap: `${spacing}px`,
    });

    children.forEach((child: { render: (arg0: HTMLDivElement) => void; }) => {
        child.render?.(stackContainer);
    });

    return {
        elements: [stackContainer],
        render(container: { appendChild: (arg0: HTMLDivElement) => void; }) {
            if (container instanceof Node) container.appendChild(stackContainer);
        },
        ...options, // Include any additional options
    };
};

export default vStack