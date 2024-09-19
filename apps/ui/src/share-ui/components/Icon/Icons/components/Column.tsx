/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface ColumnProps extends React.SVGAttributes<SVGElement> {
size?: string | number;
}
const Column: React.FC<ColumnProps> = ({size, ...props}) => (
  <svg viewBox="0 0 20 20" fill="currentColor" width={ size || "20" } height={ size || "20" } {...props}>
    <path d="M6 4.5H4C3.72386 4.5 3.5 4.72386 3.5 5V15C3.5 15.2761 3.72386 15.5 4 15.5H6L6 4.5ZM7.5 4.5L7.5 15.5H16C16.2761 15.5 16.5 15.2761 16.5 15V5C16.5 4.72386 16.2761 4.5 16 4.5H7.5ZM4 3C2.89543 3 2 3.89543 2 5V15C2 16.1046 2.89543 17 4 17H16C17.1046 17 18 16.1046 18 15V5C18 3.89543 17.1046 3 16 3H4ZM12 6H15V14H12V6Z"
      fill="currentColor" fillRule="evenodd" clipRule="evenodd" />
  </svg>
);
Column.displayName = 'Column';
export default Column;
/* tslint:enable */
/* eslint-enable */
