const hStack = ({ spacing = 0, alignment = "center", style = {}, ...styles }: any, children: any[]) => {
    const stackContainer = document.createElement("div");
    Object.assign(stackContainer.style, style, {
        display: "flex",
        flexDirection: "row",
        alignItems: alignment,
        gap: `${spacing}px`,
        justifyContent: "center", // Center children horizontally
        ...styles // Apply additional styles
    });

    children.forEach((child: { render: (arg0: HTMLDivElement) => void; }) => {
        child.render?.(stackContainer);
    });

    return {
        elements: [stackContainer],
        render(container: { appendChild: (arg0: HTMLDivElement) => void; }) {
            if (container instanceof Node) container.appendChild(stackContainer);
        },
    };
};

export default hStack;
