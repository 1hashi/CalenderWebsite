declare global {
    const VITE_API_URL: stirng;

    interface Document {
        getElementById<E extends HTMLElement = HTMLElement>(elementId: string): E | null;
    }
}

export { };