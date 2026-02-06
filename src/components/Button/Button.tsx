interface ButtonProps {
  label: string
  onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 active:scale-95"
    >
      {label}
    </button>
  )
}

export default Button
