function postedAt(date) {
  const now = new Date();
  const posted = new Date(date);
  const diff = now - posted;
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diff / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diff / (1000 * 60));
  const diffSeconds = Math.floor(diff / 1000);

  if (diffDays > 0) {
    return `${diffDays} Days Ago`;
  } if (diffHours > 0) {
    return `${diffHours} Hours Ago`;
  } if (diffMinutes > 0) {
    return `${diffMinutes} Minutes Ago`;
  } if (diffSeconds > 0) {
    return `${diffSeconds} Seconds Ago`;
  }
  return 'Just Now';
}

export { postedAt };
