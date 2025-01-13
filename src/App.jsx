import "./App.css";
import GitHubCalendar from "react-github-calendar";

function App() {
  const years = [2025, 2024, 2023, 2022];
  const username = "grubersjoe";

  return (
    <>
      <h1 style={{ textAlign: "center", color: "white" }}>
        {username}'s GitHub Calendar
      </h1>
      {years.map((year, index) => (
        <GitHubCalendar
          key={index}
          style={{ margin: "100px auto", color: "white" }}
          username={username}
          year={year}
          showWeekdayLabels={true} // Displaying the weekday labels
        />
      ))}{" "}
    </>
  );
}

export default App;
