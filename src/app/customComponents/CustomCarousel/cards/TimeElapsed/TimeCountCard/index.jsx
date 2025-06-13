export default function TimeCountCard({value, label}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="brightness-90">{value}</p>
      <p className="text-[14px] sm:text-xs brightness-90">{value <= 1 ? label.slice(0, -1) : label}</p>
    </div>
  )
}