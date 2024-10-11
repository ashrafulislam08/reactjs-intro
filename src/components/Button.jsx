const Button = (props) => {
  const customColors = {
    primary: {
      color: 'green',
      text: 'black',
    },
  };
  return (
    <button
      style={{
        marginRight: '5px',
        padding: '8px 20px',
        border: '1px solid gray',
        borderRadius: '4px',
        fontWeight: 'bold',
      }}
    >
      {props.name}
    </button>
  );
};

export default Button;
