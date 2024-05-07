const ordinalSuffix = (number, locale) => {
  if (number >= 11 && number <= 13) {
    return locale === 'en' ? 'th' : '';
  }
  const lastDigit = number % 10;
  switch (lastDigit) {
    case 1:
      return locale === 'en' ? 'st' : '';
    case 2:
      return locale === 'en' ? 'nd' : '';
    case 3:
      return locale === 'en' ? 'rd' : '';
    default:
      return locale === 'en' ? 'th' : '';
  }
};

export const stringDateFormat = (date, locale = 'en') => {
  const day = date.getDate();
  const month = new Intl.DateTimeFormat(locale, { month: 'short' }).format(date);
  const year = date.getFullYear();

  const dayWithOrdinal = day + ordinalSuffix(day, locale);
  return `${dayWithOrdinal} ${month} ${year}`;
};