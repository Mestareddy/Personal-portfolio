import "./portfolioList.scss";

export default function PortfolioList({ title, active, setSelected, id }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
      key={id}
    >
      <h3>{title}</h3>
    </li>
  );
}
