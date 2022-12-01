import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Tables!</h1>
<div>
  <section>
  <table width="800" bgcolor="black">
  <tr align="left" bgcolor="grey" >
  <th>Days</th>
  <th>Class 1</th>
  <th>Class 2</th>
  <th>Class 3</th>
  </tr>
  <tr align="left" bgcolor="lightgrey">
  <th>Monday</th>
  <td>Arrays </td>
  <td>Linked Lists</td>
  <td>DOM</td>
  </tr>
  <tr align="left" style="background-color: yellow">
  <th>Tuesday</th>
  <td>Closures</td>
  <td>Scope</td>
  <td>Traversing</td>
  </tr>
  <tr align="left" bgcolor="lightgrey">
  <th>Wednesday</th>
  <td>Array methods</td>
<td> Event Loop </td>
<td>Binding </td>
  </tr>
  <tr align="left" style="background-color: yellow">
  <th>Thursday</th>
  <td>Recursion</td>
  <td>Promises</td>
  <td>Polyfills</td>
  </tr>
  <tr align="left" bgcolor="lightgrey">
  <th>Friday</th>
  <td><i>this</i></td>
  <td>Box Model</td>
  <td>Classes</td>
  </tr>
  </table>
  </section>
  </div>
`;
