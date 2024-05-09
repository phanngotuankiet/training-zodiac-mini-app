interface HoroscopeDetails {
  message: String;
  number: String;
  color: String;
  name: String;
  content: String;
  career: String;
  love: String;
  health: String;
  finance: String;
  zodiacId: String;
}

function normalizeData(data: any, keyDayWeekMonth: string) {
  switch (keyDayWeekMonth) {
    case "daily":
      return {
        name: data?.zodiac[0]?.name_vi || " ",
        message:
          data?.zodiac[0]?.daily_horoscopes[0]?.daily_lucky_message || " ",
        number:
          data?.zodiac[0]?.daily_horoscopes[0]?.daily_lucky_numbers || " ",
        color: data?.zodiac[0]?.daily_horoscopes[0]?.daily_lucky_colors || " ",
        content: data?.zodiac[0]?.daily_horoscopes[0]?.horoscope_content || " ",
        career: data?.zodiac[0]?.daily_horoscopes[0]?.daily_career || " ",
        love: data?.zodiac[0]?.daily_horoscopes[0]?.daily_love || " ",
        health: data?.zodiac[0]?.daily_horoscopes[0]?.daily_health || " ",
        finance: data?.zodiac[0]?.daily_horoscopes[0]?.daily_finance || " ",
        zodiacId: data?.zodiac[0]?.daily_horoscopes[0]?.zodiac_id || " ",
      };
    case "weekly":
      return {
        name: data?.zodiac[0]?.name_vi || " ",
        message:
          data?.zodiac[0]?.weekly_horoscopes[0]?.weekly_lucky_message || " ",
        number:
          data?.zodiac[0]?.weekly_horoscopes[0]?.weekly_lucky_numbers || " ",
        color:
          data?.zodiac[0]?.weekly_horoscopes[0]?.weekly_lucky_colors || " ",
        content:
          data?.zodiac[0]?.weekly_horoscopes[0]?.horoscope_content || " ",
        career: data?.zodiac[0]?.weekly_horoscopes[0]?.weekly_career || " ",
        love: data?.zodiac[0]?.weekly_horoscopes[0]?.weekly_love || " ",
        health: data?.zodiac[0]?.weekly_horoscopes[0]?.weekly_health || " ",
        finance: data?.zodiac[0]?.weekly_horoscopes[0]?.weekly_finance || " ",
        zodiacId: data?.zodiac[0]?.weekly_horoscopes[0]?.zodiac_id || " ",
      };
    case "monthly":
      return {
        name: data?.zodiac[0]?.name_vi || " ",
        message:
          data?.zodiac[0]?.monthly_horoscopes[0]?.monthly_lucky_message || " ",
        number:
          data?.zodiac[0]?.monthly_horoscopes[0]?.monthly_lucky_numbers || " ",
        color:
          data?.zodiac[0]?.monthly_horoscopes[0]?.monthly_lucky_colors || " ",
        content:
          data?.zodiac[0]?.monthly_horoscopes[0]?.horoscope_content || " ",
        career: data?.zodiac[0]?.monthly_horoscopes[0]?.monthly_career || " ",
        love: data?.zodiac[0]?.monthly_horoscopes[0]?.monthly_love || " ",
        health: data?.zodiac[0]?.monthly_horoscopes[0]?.monthly_health || " ",
        finance: data?.zodiac[0]?.monthly_horoscopes[0]?.monthly_finance || " ",
        zodiacId: data?.zodiac[0]?.monthly_horoscopes[0]?.zodiac_id || " ",
      };
    default:
      return {
        message: " ",
        number: " ",
        color: " ",
        name: " ",
        content: " ",
        career: " ",
        love: " ",
        health: " ",
        finance: " ",
        zodiacId: " ",
      };
  }
}

export default normalizeData;
