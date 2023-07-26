function Input({ label, type, required, value, onChange }) {
  return (
    <div className="flex w-full flex-col items-start rounded-md border-2 border-slate-200 p-3 lg:p-4">
      <span className="pb-2 font-semibold">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="h-8 w-full rounded-md text-black focus:border-2 focus:border-teal-600 focus:outline-none focus:ring-0 lg:h-10"
      />
    </div>
  );
}

export default Input;
