export function getGreeting() {
  const hour = new Date().getHours();

  if (hour >= 5 && hour < 12) {
    return "صبح بخیر";
  }

  if (hour >= 12 && hour < 17) {
    return "ظهر بخیر";
  }

  if (hour >= 17 && hour < 21) {
    return "عصر بخیر";
  }

  return "شب بخیر";
}
