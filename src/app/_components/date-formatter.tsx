import { format } from "date-fns/format";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  try {
    const date = format(dateString, "yyyy-MM-dd");

    return <time dateTime={dateString}>{date}</time>;
  } catch (e) {
    console.log("ERROR: cannot parse date");
    console.error(e);
    return <span>{dateString.toString()}</span>;
  }
};

export default DateFormatter;
