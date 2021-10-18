const Background = ({ children, bgColor, shadow }) => {
  const combineStyles = (bgColor, shadow) => `${bgColor} ${shadow}`

  return (
    <div className={ combineStyles(bgColor, shadow) }>
      { children }
    </div>
  );
}

Background.defaultProps = {
  bgColor: "",
  shadow: ""
};

export default Background;
