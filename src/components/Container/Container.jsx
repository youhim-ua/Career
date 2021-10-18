const Container = ({ children, bgColor, overflow }) => {
  const combineStyles = (bgColor, overflow) => `container ${bgColor} ${overflow}`

  return (
    <div className={ combineStyles(bgColor, overflow) }>
      { children }
    </div>
  );
}

Container.defaultProps = {
  overflow: "",
  bgColor: ""
};

export default Container;
