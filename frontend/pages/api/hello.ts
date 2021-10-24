// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  id: number;
  subject: string;
  room: string | null;
  teacher: string | null;
};


let data2: Array<Array<Data>> = [
  [
    { id: 0, subject: "Spanish", room: "77", teacher: "Dr Moore" },
    { id: 1, subject: "History", room: "16", teacher: "Mrs Young" },


    { id: 5, subject: "DT", room: "81", teacher: "Mr Haycocks" },
    { id: 6, subject: "Maths", room: "107", teacher: "Ms Ahmad" },

    { id: 8, subject: "Biology", room: "22", teacher: "Ms Stewart" },
    { id: 9, subject: "Biology", room: "22", teacher: "Ms Stewart" },
  ],
  [
    { id: 10, subject: "Late Start", room: null, teacher: null },
    { id: 11, subject: "History", room: "17", teacher: "Mrs Young" },
    { id: 14, subject: "German", room: "46", teacher: "Mr Atkinson" },
    { id: 15, subject: "Physics", room: "11", teacher: "Dr Bocchi" },
    { id: 16, subject: "Chemistry", room: "21", teacher: "Mr Shaw" },
    { id: 18, subject: "Maths", room: "107", teacher: "Ms Ahmad" },
    { id: 19, subject: "English", room: "56", teacher: "Ms Garrib" },
  ],
  [
    { id: 20, subject: "Spanish", room: "42", teacher: "Miss Eva" },
    { id: 21, subject: "Biology", room: "22", teacher: "Ms Stewart" },
    { id: 24, subject: "DT", room: "81", teacher: "Mr Haycocks" },
    { id: 25, subject: "PE", room: "S1", teacher: "Mr Bala" },
    { id: 27, subject: "German", room: "46", teacher: "Ms Evans" },
    { id: 28, subject: "English", room: "56", teacher: "Ms Garrib" },
  ],
  [
    { id: 29, subject: "Late Start", room: null, teacher: null },
    { id: 30, subject: "Mandarin", room: "19", teacher: "Ms Chen" },
    { id: 31, subject: "English", room: "56", teacher: "Ms Garrib" },
    { id: 34, subject: "Maths", room: "107", teacher: "Ms Ahmad" },
    { id: 35, subject: "Physics", room: "11", teacher: "Dr Bocchi" },
    { id: 37, subject: "Rowing", room: "Club", teacher: "Mr Di Luzio" },
    { id: 38, subject: "Rowing", room: "Club", teacher: "Mr Di Luzio" },
  ],
  [
    { id: 39, subject: "Late Start", room: null, teacher: null },
    { id: 40, subject: "German", room: "46", teacher: "Mr Atkinson" },
    { id: 43, subject: "History", room: "16", teacher: "Mr Brown" },
    { id: 44, subject: "Spanish", room: "77", teacher: "Dr Moore" },
    { id: 45, subject: "English", room: "56", teacher: "Ms Garrib" },
    { id: 47,  subject: "DT", room: "81", teacher: "Mr Haycocks" },
    { id: 48, subject: "Biology", room: "22", teacher: "Ms Stewart" },
  ],
];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Array<Array<Data>>>
) {
  res.status(200).json(data2);
}
