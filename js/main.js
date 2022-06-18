const url = "https://jsonplaceholder.typicode.com/posts";
const container = document.querySelector("#container");

export const onloaded = async () => {
  const data = ["Userid", "ID", "Title", "Body"];
  const response = await fetch(url, { method: "get" });
  const res = await response.json();

  const array = res.filter((r) => r.userId === 3);

  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const th = document.createElement("th");
  table.classList = "table";

  container.appendChild(table);
  table.appendChild(tr);

  data.forEach((d) => {
    th.innerText = d;
    tr.appendChild(th.cloneNode(true));
  });

  array.forEach(({ userId, id, title, body }) => {
    const tr = document.createElement("tr");
    const td = document.createElement("td");
    table.appendChild(tr);
    td.innerText = userId;
    tr.appendChild(td.cloneNode(true));
    td.innerText = id;
    tr.appendChild(td.cloneNode(true));
    td.innerText = title;
    tr.appendChild(td.cloneNode(true));
    td.innerText = body;
    tr.appendChild(td.cloneNode(true));
  });
};
