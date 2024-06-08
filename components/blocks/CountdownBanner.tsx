import React, { useEffect } from "react";
import CalendarIcon from "../CalendarIcon";

interface CountdownBannerProps {
  date: Date;
}

const CountdownBanner: React.FC<CountdownBannerProps> = ({ date }) => {
  const [timeLeft, setTimeLeft] = React.useState("");
  //calculate the days left and format to {days} {hours} {minutes}
  const calculateTimeLeft = () => {
    const difference = +new Date(date) - +new Date();

    if (difference > 0) {
      const timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
      };

      return `${timeLeft.days} days ${timeLeft.hours} hours ${timeLeft.minutes} minutes`;
    }

    return "0 days 0 hours 0 minutes";
  };

  useEffect(() => {
    const int = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 3000);

    return () => {
      clearInterval(int);
    };
  });
  return (
    <div className="bg-primary-500 text-secondary-500 py-2 text-center text-sm font-medium">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-center gap-2">
          <CalendarIcon className="h-4 w-4" />
          <span>
            Glastonbury Festival starts in {calculateTimeLeft()}
            <span className="font-bold">
              <div />
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner;
