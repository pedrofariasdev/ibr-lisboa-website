"use client";

import { useEffect, useState } from "react";


type CountdownProps = {
  targetDate: Date;
};


export function Countdown({
  targetDate,
}: CountdownProps) {

const [timeLeft, setTimeLeft] = useState(0);


    useEffect(() => {

    function updateCountdown(){

        setTimeLeft(
        new Date(targetDate).getTime() - Date.now()
        );

    }

    updateCountdown();


    const interval = setInterval(
        updateCountdown,
        1000
    );


    return () => clearInterval(interval);

    }, [targetDate]);


  if(timeLeft <= 0){
    return null;
  }


  const totalSeconds = Math.floor(
    timeLeft / 1000
  );


  const hours = Math.floor(
    totalSeconds / 3600
  );


  const minutes = Math.floor(
    (totalSeconds % 3600) / 60
  );


  const seconds =
    totalSeconds % 60;


  return (

    <div className="mt-8">

      <p className="text-xs uppercase tracking-[0.3em] text-white/50">
        Começa em
      </p>


      <div className="mt-4 flex justify-center gap-4">

        <TimeBox value={hours} label="Horas" />

        <TimeBox value={minutes} label="Min" />

        <TimeBox value={seconds} label="Seg" />

      </div>

    </div>

  );
}



function TimeBox({
  value,
  label,
}:{
  value:number;
  label:string;
}){

 return (

  <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4">

    <strong className="block text-3xl font-bold">
      {String(value).padStart(2,"0")}
    </strong>

    <span className="text-xs uppercase text-white/50">
      {label}
    </span>

  </div>

 );

}