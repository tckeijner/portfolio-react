import './ContentCard.scss';
import { ContentPage } from '../contentPage';
import { useEffect, useRef } from 'react';

export type ContentCardProps = {
  page: ContentPage,
  isCurrent: boolean
}

export default function ContentCard(props: ContentCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (props.isCurrent && ref.current !== null) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });

  return (
    <div ref={ref}
         className={'content-card-container'}
    >
      <div
        className={'content-card'}>
        <h1>{props.page.title}</h1>
        <p>{props.page.text}</p>
      </div>
    </div>
  );
}