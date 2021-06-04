export default function clamp(number, minimum, maximum) {
    return Math.min(Math.max(number, minimum), maximum);
}