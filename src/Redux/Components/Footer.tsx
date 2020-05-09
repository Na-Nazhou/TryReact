import React from 'react';
import Link from '../Components/Link';
import { VisibilityFilter } from '../Types/States/VisibilityFilterState';

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilter

const Footer = () => (
  <p>
    Show:
    <Link filter={SHOW_ALL}>All</Link>
    <Link filter={SHOW_ACTIVE}>Active</Link>
    <Link filter={SHOW_COMPLETED}>Completed</Link>
  </p>
)

export default Footer