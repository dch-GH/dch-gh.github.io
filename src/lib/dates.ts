// Is this date within 'days' number of days?
export function isWithinDays(other: Date, days: number): boolean {
    const today = new Date();
    const timeDiff = today.getTime() - other.getTime();
    const diffInDays = Math.floor(timeDiff / (24 * 60 * 60 * 1000));
    return diffInDays <= 31;
}