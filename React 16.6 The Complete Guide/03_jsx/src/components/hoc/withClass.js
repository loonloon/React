import React from "react";

//way 1
// const withClass = props => {
//   return <div className={props.classes}>{props.children}</div>;
// };

//way 2
const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
