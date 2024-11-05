const AnimatedLetters = () => {
  const firstName = 'Melvin'
  const lastName = 'Lee'

  return (
    <h1 className="flex text-6xl font-bold text-rose-400">
      {firstName.split('').map((letter, index) => (
        <span
          key={index}
          className="inline-block animate-letter-fade opacity-0"
          style={{ animationDelay: `${index * 0.1}s` }} // Delay each letter
        >
          {letter}
        </span>
      ))}
      <span className="mx-2"> </span> {/* Add space between words */}
      {lastName.split('').map((letter, index) => (
        <span
          key={index + firstName.length} // Ensure unique keys
          className="inline-block animate-letter-fade opacity-0"
          style={{ animationDelay: `${(index + firstName.length) * 0.1}s` }} // Delay each letter
        >
          {letter}
        </span>
      ))}
    </h1>
  )
}

export default AnimatedLetters
