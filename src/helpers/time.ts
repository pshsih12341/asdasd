export function formatTimeToMoscow(date: Date): string {
    return date.toLocaleTimeString('ru-RU', { 
      timeZone: 'Europe/Moscow', 
      hour: '2-digit', 
      minute: '2-digit' 
    });
}
export function formatDateToMoscowNumeric(date: Date): string {
    return date.toLocaleDateString('ru-RU', { 
      timeZone: 'Europe/Moscow', 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit' 
    });
  }
export function formatDate(input: string): string {
  const date = new Date(input);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function formatTime(timeString: string): string {
  const timePattern = /^\d{2}:\d{2}:\d{2}$/;
  
  if (!timePattern.test(timeString)) {
      throw new Error('Invalid time format. Expected format: HH:mm:ss');
  }

  const [hours, minutes] = timeString.split(':');
  
  return `${hours}:${minutes}`;
}