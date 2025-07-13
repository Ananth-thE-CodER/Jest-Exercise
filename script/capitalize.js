export default function capitalize (str) {
    if (!str) {
        return new Error("No string provided.")
    }
    else {
        return str[0].toUpperCase() + str.slice(1);
    }
}