import {useState, useEffect } from 'react'

const Classroom = () => {
    const [data, setData] = useState<Array<Array<String>>>();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch("http://127.0.0.1:8000/assignments")
            const resp = await res.json()
            setData(resp);
        }
        getData();
        return () => {
            setData(undefined);
        }
    }, [setData])

    return (
        <div className="emailcontainer">
            {data === undefined ? <p>Fetching Data Now ...</p> : data.map((item) => {
                return (<>
                    <p className="card">
                    <b>Task:</b> {item[0]} <br></br>
                    <b>Due Date:</b> {item[1]} <br></br>
                    <b>Class: </b> {item[2]} <br></br>
                    </p>
                    </>
                )
            })}
        </div>
    )
}

export default Classroom
