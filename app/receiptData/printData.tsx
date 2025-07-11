function PrintReceipt() {
  window.print()
}

export default function PrintReceiptComp() {
  return (
    <>
      <button
        className="h-12 w-12 border-2 rounded-xl bg-green-200 cursor-pointer"
        onClick={PrintReceipt}
      >
        print
      </button>
    </>
  );
}
