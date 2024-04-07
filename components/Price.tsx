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
      {currency}
      <span className={numSize}>{num}</span>
    </>
  );
}

export default Price;
