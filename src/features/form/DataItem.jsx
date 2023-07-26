function DataItem({ label, value }) {
  return (
    <div className="flex w-full flex-col items-start border-b-[1px] border-teal-700 pb-2 lg:flex-row lg:space-x-6">
      <span className="pb-2 font-semibold">{label}:</span>
      <span className="pb-2">{value}</span>
    </div>
  );
}

export default DataItem;
