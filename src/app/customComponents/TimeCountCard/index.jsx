export default function TimeCountCard({value, label}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <p>{value}</p>
      <p className="text-[10px] sm:text-xs">{label}</p>
    </div>
  )
}