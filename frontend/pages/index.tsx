import styles from "../styles/Index.module.css";
import React, { FC, SetStateAction, useState, Dispatch, MouseEvent } from "react";
import Button from "./components/Button";
import Timetable from "./components/Timetable";
import Emails from "./components/Emails";
import Classroom from "./components/Classroom";

const index: FC = () => {
  const lightcoral = "lightcoral";
  const [calendar, setCalendar] = useState(false);
  const [timetable, setTimetable] = useState(false);
  const [assignments, setAssignments] = useState(false);
  const [notes, setNotes] = useState(false);
  const [emails, setEmails] = useState(false);

  function toggleCalendar(e: { preventDefault: () => void }) {
    e.preventDefault();
    setCalendar(!calendar);
    setTimetable(false);
    setAssignments(false);
    setNotes(false);
    setEmails(false)
  }
  function toggleTimetable(e: { preventDefault: () => void }) {
    e.preventDefault();
    setCalendar(false);
    setTimetable(!timetable);
    setAssignments(false);
    setNotes(false);
    setEmails(false)
  }
  function toggleAssignments(e: { preventDefault: () => void }) {
    e.preventDefault();
    setCalendar(false);
    setTimetable(false);
    setAssignments(!assignments);
    setNotes(false);
    setEmails(false)
  }
  function toggleNotes(e: { preventDefault: () => void }) {
    e.preventDefault();
    setCalendar(false);
    setTimetable(false);
    setAssignments(false);
    setNotes(!notes);
    setEmails(false)
  }
  function toggleEmails(e: { preventDefault: () => void }) {
    e.preventDefault();
    setCalendar(false);
    setTimetable(false);
    setAssignments(false);
    setNotes(false);
    setEmails(!emails)
  }

  return (
    <div>
      <h1 className={styles.header}>My Landing Page</h1>
      <div className={styles.wrapperbtn}>
        {calendar ? (
          <button className={styles.button} onClick={toggleCalendar}>
            Calendar
          </button>
        ) : (
          <button
            className={styles.button}
            style={{ backgroundColor: lightcoral }}
            onClick={toggleCalendar}
          >
            Calendar
          </button>
        )}
        {timetable ? (
          <button className={styles.button} onClick={toggleTimetable}>
            Timetable
          </button>
        ) : (
          <button
            className={styles.button}
            style={{ backgroundColor: lightcoral }}
            onClick={toggleTimetable}
          >
            Timetable
          </button>
        )}
        {assignments ? (
          <button className={styles.button} onClick={toggleAssignments}>
            Assignments
          </button>
        ) : (
          <button
            className={styles.button}
            style={{ backgroundColor: lightcoral }}
            onClick={toggleAssignments}
          >
            Assignments
          </button>
        )}
        {notes ? (
          <button className={styles.button} onClick={toggleNotes}>
            Notes
          </button>
        ) : (
          <button
            className={styles.button}
            style={{ backgroundColor: lightcoral }}
            onClick={toggleNotes}
          >
            Notes
          </button>
        )}
        {emails ? (
          <button className={styles.button} onClick={toggleEmails}>
            Emails
          </button>
        ) : (
          <button
            className={styles.button}
            style={{ backgroundColor: lightcoral }}
            onClick={toggleEmails}
          >
            Emails
          </button>
        )}
      </div>
      {/* TODO: Add relevant components to each ternary statement */}
      {calendar ? <p>Calendar</p> : ""}
      {timetable ? <Timetable /> : ""}
      {assignments ? <Classroom /> : ""}
      {notes ? <p>Notes</p> : ""}
      {emails ? <Emails /> : ""}
    </div>
  );
};

export default index;
