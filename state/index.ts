// State Management Module
const StateManager = (() => {
    const state: Record<string, any> = {};
    const subscribers: Array<(data: any) => void> = [];

    const subscribe = (callback: (data: any) => void) => {
        subscribers.push(callback);
    };

    const setState = (key: string | number, value: any) => {
        console.log(key, value)
        const oldValue = state[key];
        state[key] = value;
        notifySubscribers(key, value, oldValue);
    };

    const getState = (key: string | number) => {
        return state[key];
    };

    const notifySubscribers = (key: any, newValue: any, oldValue: any) => {
        subscribers.forEach((callback) => {
            callback(state);
        });

        console.clear();
        console.log('State Changes:');
        console.log('--------------------------');
        console.table(state);
        console.log('--------------------------');
        console.log(`State change: ${key}`);
        console.log(`New Value: ${JSON.stringify(newValue)}`); // Use JSON.stringify to handle different data types
        console.log(`Old Value: ${JSON.stringify(oldValue)}`);
    };

    return {
        subscribe,
        setState,
        getState,
    };
})();

export default StateManager;
