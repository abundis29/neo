const breadcrumb = ({ items = [], separator = '>', style = {} }) => {
    const breadcrumbContainer = document.createElement('div');
    Object.assign(breadcrumbContainer.style, style, {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    });

    // Create breadcrumb items and separator
    items.forEach((item, index) => {
        const breadcrumbItem = document.createElement('div');
        breadcrumbItem.textContent = item;

        // Add separator if not the last item
        if (index < items.length - 1) {
            const separatorElement = document.createElement('div');
            separatorElement.textContent = separator;
            breadcrumbContainer.appendChild(separatorElement);
        }

        breadcrumbContainer.appendChild(breadcrumbItem);
    });

    return {
        elements: [breadcrumbContainer],
        render(container: { appendChild: (arg0: HTMLDivElement) => void; }) {
            if (container instanceof Node) container.appendChild(breadcrumbContainer);
        },
    };
};

export default breadcrumb;
