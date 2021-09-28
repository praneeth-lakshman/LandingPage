import styles from "../styles/Index.module.css";
import { FC, SetStateAction, useState, Dispatch, MouseEvent } from "react";
import Button from "./components/Button";

const index: FC = () => {
  const lightcoral = "lightcoral"
  const [calendar, setCalendar] = useState(false);
  const [timetable, setTimetable] = useState(false);
  const [assignments, setAssignments] = useState(false);
  const [notes, setNotes] = useState(false);

  function toggleCalendar(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setCalendar(!calendar);
    setTimetable(false);
    setAssignments(false);
    setNotes(false);
  }
  function toggleTimetable(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setCalendar(false);
    setTimetable(!timetable);
    setAssignments(false);
    setNotes(false);
  }
  function toggleAssignments(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setCalendar(false);
    setTimetable(false);
    setAssignments(!assignments);
    setNotes(false);
  }
  function toggleNotes(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setCalendar(false);
    setTimetable(false);
    setAssignments(false);
    setNotes(!notes);
  }


  return (
    <div>
      <h1 className={styles.header}>My Landing Page</h1>
      <div className={styles.wrapperbtn}>
        <button className={styles.button} style={{backgroundColor: lightcoral}} onClick={toggleCalendar}>Calendar</button>
        <button className={styles.button} onClick={toggleTimetable}>Timetable</button>
        <button className={styles.button} style={{backgroundColor: lightcoral}} onClick={toggleAssignments}>Assignments</button>
        <button className={styles.button} onClick={toggleNotes}>Notes</button>
      </div>
      {/* TODO: Add relevant components to each ternary statement */}
      {calendar ? <p>Calendar</p> : ""}
      {timetable ? <p>Timetable</p> : ""}
      {assignments ? <p>Assignments</p> : ""}
      {notes ? <p>Notes</p> : ""}
    </div>
  );
};

export default index;
