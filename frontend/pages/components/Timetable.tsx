import React, { useState, useEffect } from "react";
import styles from "../../styles/Timetable.module.css"

type Data = {
  id: number;
  subject: string;
  room: string | null;
  teacher: string | null;
};
const Days: Array<String> = [
    "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let date: Date = new Date()
let today: String = Days[date.getDay()]

const Timetable = () => {
  const [data, setData] = useState<Array<Array<Data>>>();

  useEffect(() => {
    const getResults = async () => {
      const result = await fetch("http://127.0.0.1:8000/timetable");
      const resp = await result.json();
      setData(resp);
    };
    getResults();
    return () => {
      setData(undefined);
    }
  }, [setData]);

  return (
    <section className={styles.timetable}>
      {data == undefined
        ? ""
        : data.map((item, index) => (
            <div key={index} className={Days[index + 1] == today ? styles.cardred : styles.card}>
              {" "}
              <b key={index} className={styles.day}>{Days[index + 1]}:</b><br className={styles.br}></br><br className={styles.br}></br>
              {item.map(({ id, subject, room, teacher }) => (
                <>
                  <div key={id}>
                    {subject != "Late Start" ? <b>{subject}</b> : <b className={styles.latestart}>{subject}</b>}
                    {room ? <p>Room: {room}</p> : <br className={styles.br}></br>}
                    {teacher ? <p>Teacher: {teacher}</p> : <br className={styles.br}></br>}
                  </div>
                </>
              ))}
            </div>
          ))}
    </section>
  );
};

export default Timetable;
