import React, { PureComponent } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import './Texts.scss';

import TextItem from '../TextItem/TextItem';

import { textsCreateNew, textsRemove, textsSetData, textsClear } from '../../actions/texts';

class Texts extends PureComponent {
  constructor(props) {
    super(props);
  }

  onCreate = () => {
    this.props.textsCreateNew();
  }

  onClear = () => {
    this.props.textsClear();
  }

  render() {
    const { texts, textsRemove, textsSetData } = this.props;
    return (
      <div className="texts">
        <div className="texts_buttons">
          <button className="texts_button_add" onClick={this.onCreate}>add</button>
          <button className="texts_button_clear" onClick={this.onClear}>clear all</button>
        </div>
        <CSSTransitionGroup
          component="ul"
          transitionName="item"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={200}
        >
            {
              texts.map(text => (
                <li key={text.id}>
                  <TextItem text={text} onRemove={textsRemove} onUpdate={textsSetData} />
                </li>
              ))
            }
        </CSSTransitionGroup>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    texts: state.texts,
  };
};

const mapActionToProps = {
  textsCreateNew,
  textsRemove,
  textsSetData,
  textsClear,
};

export default connect(mapStateToProps, mapActionToProps)(Texts);