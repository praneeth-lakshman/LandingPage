import itertools
from random import shuffle

after_school = {
    "4:45 - 5:45": "Homework",
    "5:45 - 6:00": "Break",
    "6:00 - 6:15": None,
    "6:15 - 6:30": None,
    "6:30 - 6:45": None,
    "6:45 - 7:00": None,
    "7:00 - 7:30": "Dinner",
    "7:30 - 7:45": None,
    "7:45 - 8:00": None,
    "8:00 - sleep": None
}

subjects = [
    "Maths",
    "English",
    "German",
    "Physics",
    "Biology",
    "Chemistry",
    "History",
    "DT",
    "Spanish",
]

hobby = "Reading"

imp = "Maths"

def add_imp(subjects, imp):
    return subjects + [imp]

def flatten(lis):
    return list(itertools.chain(*lis))

def shuff(lis):
    shuffle(lis)
    return lis

def split_list(alist, wanted_parts=10):
    length = len(alist)
    return [ alist[i*length // wanted_parts: (i+1)*length // wanted_parts] 
             for i in range(wanted_parts) ]

def dim(a):
    if not type(a) == list:
        return []
    return [len(a)] + dim(a[0])

def extend_list(subs):
    return shuff(subs) + shuff(subs) + shuff(subs) + shuff(subs) + shuff(subs) + shuff(subs)

def assign(dic, lis):
    dic1 = dic.copy()
    dic1["6:00 - 6:15"] = lis[0]
    dic1["6:15 - 6:30"] = lis[1]
    dic1["6:30 - 6:45"] = lis[2]
    dic1["6:45 - 7:00"] = lis[3]
    dic1["7:30 - 7:45"] = lis[4]
    dic1["7:45 - 8:00"] = lis[5]
    return dic1

def assign_all(dic=after_school, subjects=subjects, imp=imp, hob=hobby):
    dic["8:00 - sleep"] = hob
    lis = split_list(extend_list(add_imp(subjects, imp)))
    return {
        "AMon": assign(dic, lis[0]),
        "ATue": assign(dic, lis[1]),
        "AWed": assign(dic, lis[2]),
        "AThurs": assign(dic, lis[3]),
        "AFri": assign(dic, lis[4]),
        "BMon": assign(dic, lis[5]),
        "BTues": assign(dic, lis[6]),
        "BWed": assign(dic, lis[7]),
        "BThurs": assign(dic, lis[8]),
        "BFri": assign(dic, lis[9]),
    }
