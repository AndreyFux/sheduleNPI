
export const now = () => {
    let today = new Date();
    const options = { weekday: "short", month: "short", day: "numeric" };
    return today.toLocaleString("ru-RU", options);
}
