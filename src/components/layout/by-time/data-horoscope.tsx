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

function normalizeData(data: any, key: number): HoroscopeDetails {
  switch (key) {
    case 0:
      return {
        name: data?.users[0]?.zodiac?.name_vi || " ",
        message:
          data?.users[0]?.zodiac?.daily_horoscopes[0]?.daily_lucky_message ||
          " ",
        number:
          data?.users[0]?.zodiac?.daily_horoscopes[0]?.daily_lucky_numbers ||
          " ",
        color:
          data?.users[0]?.zodiac?.daily_horoscopes[0]?.daily_lucky_colors ||
          " ",
        content:
          data?.users[0]?.zodiac?.daily_horoscopes[0]?.horoscope_content || " ",
        career:
          data?.users[0]?.zodiac?.daily_horoscopes[0]?.daily_career || " ",
        love: data?.users[0]?.zodiac?.daily_horoscopes[0]?.daily_love || " ",
        health:
          data?.users[0]?.zodiac?.daily_horoscopes[0]?.daily_health || " ",
        finance:
          data?.users[0]?.zodiac?.daily_horoscopes[0]?.daily_finance || " ",
        zodiacId: data?.users[0]?.zodiac_id || " ",
      };

    case 1:
      return {
        name: data?.users[0]?.zodiac?.name_vi || " ",

        message:
          data?.users[0]?.zodiac?.weekly_horoscopes[0]?.weekly_lucky_message ||
          " ",
        number:
          data?.users[0]?.zodiac?.weekly_horoscopes[0]?.weekly_lucky_numbers ||
          " ",
        color:
          data?.users[0]?.zodiac?.weekly_horoscopes[0]?.weekly_lucky_colors ||
          " ",
        content:
          data?.users[0]?.zodiac?.weekly_horoscopes[0]?.horoscope_content ||
          " ",
        career:
          data?.users[0]?.zodiac?.weekly_horoscopes[0]?.weekly_career || " ",
        love: data?.users[0]?.zodiac?.weekly_horoscopes[0]?.weekly_love || " ",
        health:
          data?.users[0]?.zodiac?.weekly_horoscopes[0]?.weekly_health || " ",
        finance:
          data?.users[0]?.zodiac?.weekly_horoscopes[0]?.weekly_finance || " ",
        zodiacId: data?.users[0]?.zodiac_id || " ",
      };
    case 2:
      return {
        name: data?.users[0]?.zodiac?.name_vi || " ",

        message:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]
            ?.monthly_lucky_message || " ",
        number:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]
            ?.monthly_lucky_numbers || " ",
        color:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]?.monthly_lucky_colors ||
          " ",
        content:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]?.horoscope_content ||
          " ",
        career:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]?.monthly_career || " ",
        love:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]?.monthly_love || " ",
        health:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]?.monthly_health || " ",
        finance:
          data?.users[0]?.zodiac?.monthly_horoscopes[0]?.monthly_finance || " ",
        zodiacId: data?.users[0]?.zodiac_id || " ",
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
