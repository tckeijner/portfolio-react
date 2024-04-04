import './ContentContainer.scss';
import ContentCard from './ContentCard/ContentCard';
import { contentPages } from './contentPage';
import { RootState } from '../store';
import { connect } from 'react-redux';

export type ContentContainerProps = {
  navState: number;
}

const mapStateToProps = (state: RootState) => ({ navState: state.nav.navState });

function ContentContainer(props: ContentContainerProps) {
  return (
    <div className={'content-container'}>
      {contentPages.map((page, index) =>
        <ContentCard key={index}
                     page={page}
                     isCurrent={index === props.navState}
        />,
      )}
    </div>
  );
}

export default connect(mapStateToProps)(ContentContainer);