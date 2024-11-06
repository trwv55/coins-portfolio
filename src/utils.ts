export function calculatePercentageDifference(originalValue: any, newValue: any) {
    // Рассчитываем разницу между новым и оригинальным значениями
    const difference = newValue - originalValue;
    // Рассчитываем процентную разницу
    const percentageDifference = (difference / Math.abs(originalValue)) * 100;

    return percentageDifference;
}
