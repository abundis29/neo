// index.d.ts
declare module 'neo-module' {
    export const renderApp: (app: () => Promise<{ elements: Element[] }>, container: HTMLElement) => void;
    export const registerOnAppear: (callback: () => void) => void;
    export const registerOnDisappear: (callback: () => void) => void;
    export const vStack: (options: { spacing?: number; style?: Record<string, string> }, children: Element[]) => Element;
    export const hStack: (options: { spacing?: number; style?: Record<string, string> }, children: Element[]) => Element;
    export const text: (content: string, options?: { style?: Record<string, string> }) => Element;
    export const button: (label: string, onClick: () => void, options?: { style?: Record<string, string> }) => Element;
    export const input: (options?: { placeholder?: string; onChange?: (value: string) => void; style?: Record<string, string> }) => Element;
    export const image: (src: string, options?: { style?: Record<string, string> }) => Element;
    export const breadcrumb: (options?: { items?: string[]; separator?: string; style?: Record<string, string> }) => Element;

    // Export the StateManager type if necessary
    export const StateManager: {
        subscribe: (callback: (data: any) => void) => void;
        setState: (key: string | number, value: any) => void;
        getState: (key: string | number) => any;
    };
}
