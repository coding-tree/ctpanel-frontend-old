import React, {forwardRef, useEffect, useRef} from 'react';
import Checkbox from '../Checkbox';

const IndeterminateCheckbox = forwardRef(({indeterminate, toggleRowSelected, checked, ...rest}, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  const handleClick = (e) => {
    e.stopPropagation();
    toggleRowSelected();
  };
  return (
    <div className="checkbox" onClick={handleClick}>
      <input type="checkbox" ref={resolvedRef} {...rest} hidden />
      <Checkbox />
    </div>
  );
});

export default IndeterminateCheckbox;
