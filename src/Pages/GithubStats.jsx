import styled from 'styled-components';
import GitHubCalendar from 'react-github-calendar';

function GithubStats() {
  return (
    <DIV>
      <h1>GITHUB STATS!</h1>
      <div className="github-calendar">
        <GitHubCalendar username="VinodHadmode" />
      </div>
      <br /> <br />
      <div className="github-stats-info">
        {/* Streak stat */}
        <div id="streak-stats">
          <img
            id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=VinodHadmode&theme=dark"
            alt="GitHub Streak Stats"
          />
        </div>

        {/* GitHub stats */}
        <div id="github-stats">
          <img
            id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=VinodHadmode&show_icons=true&theme=dark"
            alt="GitHub Stats"
          />
        </div>

        {/* Language stats */}
        <div id="language-stats">
          <img
            id="github-top-langs"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=VinodHadmode&layout=donut&show_icons=true&theme=dark"
            alt="Top Languages"
          />
        </div>
      </div>
    </DIV>
  );
}

export default GithubStats;

const DIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  padding: 30px;
  background-color: rgb(25, 25, 27);
  color: #fff;

  h1 {
    margin-bottom: 40px;
  }

  .github-calendar {
    border: 2px solid gray;
    padding: 20px;
    width: 70%;
    background-color: #1a1a1d;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }
  }

  .github-stats-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    margin-top: 20px;
  }

  .github-stats-info img {
    width: 440px;
    border-radius: 8px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }
  }

  @media all and (max-width: 1024px) {
    .github-stats-info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .github-stats-info img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    .github-calendar {
      width: 80%;
    }
  }

  @media (max-width: 480px) {
    margin: 40px;

    .github-calendar {
      width: 100%;
      padding: 10px;
    }

    .github-stats-info {
      gap: 15px;
    }

    .github-stats-info img {
      width: 100%;
    }
  }
`;
