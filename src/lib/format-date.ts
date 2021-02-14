function paddingInfixZero(n: number): string {
  if (0 < n && n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}

export default function formatDate(dateStr: string) {
  const date = new Date(dateStr);
  const year = date.getFullYear();
  const month = paddingInfixZero(date.getMonth() + 1);
  const dayOfMonth = paddingInfixZero(date.getDate());
  const hours = paddingInfixZero(date.getHours());
  const minutes = paddingInfixZero(date.getMinutes());
  const seconds = paddingInfixZero(date.getSeconds());
  return `${year}-${month}-${dayOfMonth} ${hours}:${minutes}:${seconds}`;
}
