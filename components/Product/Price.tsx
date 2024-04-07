function Price({
  currency,
  num,
  numSize,
}: {
  currency: string;
  num: string | number;
  numSize: string;
}) {
  return (
    <>
      <span className={numSize}>
        {num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
      </span>
      {currency}
    </>
  );
}

export default Price;
