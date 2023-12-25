import { Table } from "antd";
import { child, get, ref } from "firebase/database";
import { useMemo, useState } from "react";
import { database } from "../filebase";
function App() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const dbRef = ref(database);
  const columns = useMemo(() => {
    return [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "Score",
        dataIndex: "score",
        key: "score",
      },
    ];
  }, []);
  get(child(dbRef, `Sheet`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const newData = Object.values(snapshot.val()).map((i: any) => {
          return {
            name: i.Name,
            age: i.Age,
            score: i.Score,
          };
        });
        setData(newData);
      }
    })
    .catch((error) => {
      console.error(error);
    });
  return (
    <>
      <div>{<Table columns={columns} dataSource={data} />}</div>
    </>
  );
}

export default App;
