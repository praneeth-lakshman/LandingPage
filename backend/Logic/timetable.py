from pydantic import BaseModel
import datetime


class Lesson(BaseModel):
    subject: str
    room = "No room"
    teacher = "Mr Nobody"


AWeek = [
    [
        Lesson(subject="History", room="16", teacher="Mrs Young"),
        Lesson(subject="History", room="16", teacher="Mrs Young"),
        Lesson(subject="DT", room="81", teacher="Mr Haycocks"),
        Lesson(subject="English", room="56", teacher="Ms Garrib"),
        Lesson(subject="Chemistry", room="21", teacher="Mr Shaw"),
        Lesson(subject="Chemistry", room="21", teacher="Mr Shaw"),
    ],
    [
        Lesson(subject="Late Start"),
        Lesson(subject="Maths", room="107", teacher="Ms Ahmad"),
        Lesson(subject="Physics", room="11", teacher="Dr Bocchi"),
        Lesson(subject="German", room="45", teacher="Mr Atkinson"),
        Lesson(subject="Chemistry", room="21", teacher="Mr Shaw"),
        Lesson(subject="Biology", room="22", teacher="Ms Stewart"),
        Lesson(subject="Physics", room="11", teacher="Dr Bocchi"),
    ],
    [
        Lesson(subject="Maths", room="107", teacher="Ms Ahmad"),
        Lesson(subject="Physics", room="11", teacher="Dr Bocchi"),
        Lesson(subject="21st Century Life", room="JLT", teacher="Mr O'Connell"),
        Lesson(subject="German", room="46", teacher="Mr Atkinson"),
        Lesson(subject="Spanish", room="42", teacher="Miss Eva"),
        Lesson(subject="History", room="17", teacher="Mrs Young"),
    ],
    [
        Lesson(subject="Late Start"),
        Lesson(subject="Mandarin", room="19", teacher="Ms Chen"),
        Lesson(subject="English", room="56", teacher="Ms Garrib"),
        Lesson(subject="Chemistry", room="21", teacher="Mr Shaw"),
        Lesson(subject="Maths", room="107", teacher="Ms Ahmad"),
        Lesson(subject="Rowing", room="Club", teacher="Mr Di Luzio"),
        Lesson(subject="Rowing", room="Club", teacher="Mr Di Luzio"),
    ],
    [
        Lesson(subject="Late Start"),
        Lesson(subject="German", room="46", teacher="Mr Atkinson"),
        Lesson(subject="Spanish", room="77", teacher="Miss Eva"),
        Lesson(subject="Spanish", room="77", teacher="Dr Moore"),
        Lesson(subject="English", room="56", teacher="Ms Garrib"),
        Lesson(subject="DT", room="81", teacher="Mr Haycocks"),
        Lesson(subject="DT", room="81", teacher="Mr Haycocks"),
    ],
]

BWeek = [
    [
        Lesson(id=0, subject="Spanish", room="77", teacher="Dr Moore"),
        Lesson(id=1, subject="History", room="16", teacher="Mrs Young"),
        Lesson(id=2, subject="DT", room="81", teacher="Mr Haycocks"),
        Lesson(id=3, subject="Maths", room="107", teacher="Ms Ahmad"),
        Lesson(id=4, subject="Biology", room="22", teacher="Ms Stewart"),
        Lesson(id=5, subject="Biology", room="22", teacher="Ms Stewart"),
    ],
    [
        Lesson(id=6, subject="Late Start"),
        Lesson(id=7, subject="History", room="17", teacher="Mrs Young"),
        Lesson(id=8, subject="German", room="46", teacher="Mr Atkinson"),
        Lesson(id=9, subject="Physics", room="11", teacher="Dr Bocchi"),
        Lesson(id=10, subject="Chemistry", room="21", teacher="Mr Shaw"),
        Lesson(id=11, subject="Maths", room="107", teacher="Ms Ahmad"),
        Lesson(id=12, subject="English", room="56", teacher="Ms Garrib"),
    ],
    [
        Lesson(id=13, subject="Spanish", room="42", teacher="Miss Eva"),
        Lesson(id=14, subject="Biology", room="22", teacher="Ms Stewart"),
        Lesson(id=15, subject="DT", room="81", teacher="Mr Haycocks"),
        Lesson(id=16, subject="PE", room="S1", teacher="Mr Bala"),
        Lesson(id=17, subject="German", room="46", teacher="Ms Evans"),
        Lesson(id=18, subject="English", room="56", teacher="Ms Garrib"),
    ],
    [
        Lesson(id=19, subject="Late Start"),
        Lesson(id=20, subject="Mandarin", room="19", teacher="Ms Chen"),
        Lesson(id=21, subject="English", room="56", teacher="Ms Garrib"),
        Lesson(id=22, subject="Maths", room="107", teacher="Ms Ahmad"),
        Lesson(id=23, subject="Physics", room="11", teacher="Dr Bocchi"),
        Lesson(id=24, subject="Rowing", room="Club", teacher="Mr Di Luzio"),
        Lesson(id=25, subject="Rowing", room="Club", teacher="Mr Di Luzio"),
    ],
    [
        Lesson(id=26, subject="Late Start"),
        Lesson(id=27, subject="German", room="46", teacher="Mr Atkinson"),
        Lesson(id=28, subject="History", room="16", teacher="Mr Brown"),
        Lesson(id=29, subject="Spanish", room="77", teacher="Dr Moore"),
        Lesson(id=30, subject="English", room="56", teacher="Ms Garrib"),
        Lesson(id=31, subject="DT", room="81", teacher="Mr Haycocks"),
        Lesson(id=32, subject="Biology", room="22", teacher="Ms Stewart"),
    ],
]


def get_week_number():
    now = datetime.datetime.today()
    if datetime.date(now.year, now.month, now.day).isocalendar()[1] % 2 == 0:
        val = True
    else:
        val = False

    if now.weekday() >= 6:
        val = not val

    return val


export_week = AWeek if get_week_number() else BWeek
