import PropTypes from "prop-types";

function Item({ marca = "Faltou a marca", anoLancamento = 0 }) {
  return (
    <>
      <li>
        {marca} - {anoLancamento}
      </li>
    </>
  );
}

Item.propTypes = {
  marca: PropTypes.string.isRequired,
  anoLancamento: PropTypes.number,
};

// Depreciado após React 18.3
// Item.defaultProps = {
//     marca: "Faltou a marca",
//     anoLancamento: 0,
// }

export default Item;
