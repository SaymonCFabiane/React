function SeuNome({ setNome }) {
  return (
    <>
      <p>Digite seu nome:</p>
      <input
        type="text"
        placeholder="Qual é o sej nome?"
        onChange={(e) => setNome(e.target.value)}
      />
    </>
  );
}

export default SeuNome;
