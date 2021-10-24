import { useEffect, useState } from "react";

type Email = {
  id: number;
  subject: String;
  from: String;
};

const Emails = () => {
  const [data, setData] = useState<Array<Email>>([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("http://127.0.0.1:8000/emails");
      const final = await res.json();
      setData(final);
    };
    getData();
    return () => {
      setData([]);
    };
  }, [setData]);
  return (
    <>
      <div className="emailcontainer">
        {data.length === 0 ? (
          <p>Loading ...</p>
        ) : (
          data.map((item) => {
            return (
              <p className="card" key={item.id}>
                <b>From:</b> <br></br>
                {item.from} <br></br>
                <b>Subject:</b> <br></br>
                {item.subject}
              </p>
            );
          })
        )}
      </div>
    </>
  );
};

export default Emails;
