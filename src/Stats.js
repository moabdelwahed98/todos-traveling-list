export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding new item 🧨🧨</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      {numItems !== numPacked ? (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {numPacked} (
          {numItems > 0
            ? ((numPacked / numItems) * 100).toFixed(2) + "%"
            : "0%"}
          )
        </em>
      ) : (
        <em>You are already done 😃😁</em>
      )}
    </footer>
  );
}
