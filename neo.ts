import { hStack, vStack, text, button, input, image, breadcrumb } from './components/index';
import StateManager from './state';

const Neo = (() => {
    interface PrivateNeo {
        elements: Element[];
        appearCallback: () => void;
        disappearCallback: () => void;
        appeared: boolean;
    }

    const privateNeo: PrivateNeo = {
        elements: [],
        appearCallback: () => {},
        disappearCallback: () => {},
        appeared: false,
    };

    let container: HTMLElement;

    const updateUI = async (
        app: () => Promise<{ elements: Element[] }>
        | { elements: Element[] },
        loader: HTMLDivElement 
    ) => {
        try {
            console.log("Updating UI...");
            
            container.innerHTML = '';
            const { elements } = await app();

            const fragment = document.createDocumentFragment();

            elements.forEach((component) => {
                    //@ts-ignore
                component.elements.forEach((subElement: any) => {
                    fragment.appendChild(subElement);
                });
            });

            container.appendChild(fragment);

            loader.style.display = "none";

            if (privateNeo.appearCallback && !privateNeo.appeared) {
                privateNeo.appearCallback();
                privateNeo.appeared = true;
            }
        } catch (error) {
            console.error("Error rendering content:", error);
        }
    };

    const render = async (
        app: any,
        containerRef: HTMLElement
    ) => {
        if (!containerRef) {
            console.error("Container not found.");
            return;
        }

        container = containerRef; 

        const loader = document.createElement("div");
        loader.textContent = "Loading...";
        loader.style.display = "block";
        container.innerHTML = '';

        StateManager.subscribe(() => updateUI(app, loader));

        updateUI(app, loader);
    };

    return {
        setState: StateManager.setState,
        getState: StateManager.getState,
        renderApp: render,
        registerOnAppear: (callback: () => void) => { privateNeo.appearCallback = callback; },
        registerOnDisappear: (callback: () => void) => { privateNeo.disappearCallback = callback; },
        hStack, vStack, text, button, input, image, breadcrumb
    };
})();

export default Neo;
