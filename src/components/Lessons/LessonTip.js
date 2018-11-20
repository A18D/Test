import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

export class LessonTip extends PureComponent {
  static propTypes = {
    numberTip: PropTypes.number.isRequired,
    incNumberTip: PropTypes.func.isRequired
  };

  constructor (props) {
    super (props);

    this.state = {
      showTip: false,
    };
  }

  handleTip = () => {
    if (this.props.numberTip > 0) {
      let pShowTip = !this.state.showTip;
      this.setState ({showTip: pShowTip}); //, numberTip: numberTip
    }
  };

  render () {
    return (
      <p>
        <div class="HorizontalContainer">
          <button
            class="HorizontalContainer_item_ButtonTip"
            onClick={this.handleTip}
          >
            <i>i</i>
          </button>
          <p id="titleTip" class="HorizontalContainer_item_pTip">
            Подсказка
          </p>
        </div>
        <div>
          {this.props.numberTip == 1 &&
            this.state.showTip &&
            <div class="HorizontalContainerTabTip Top40">
              <div class="HorizontalContainer_item_TabTip BlueBackground">
                <div class="VerticalText">
                  Подсказка {this.props.numberTip}
                </div>
              </div>
              <div class="HorizontalContainer_item_ContentTip">
                Beer is the world's oldest[1][2][3] and most widely consumed[4] alcoholic drink; it is the third most popular drink overall, after water and tea.[5] The production of beer is called brewing, which involves the fermentation of sugars, mainly derived
                from cereal grain starches—most commonly from malted barley, although wheat, maize (corn), and rice are widely used.[6] Most beer is flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as
                herbs or fruit may occasionally be included. The fermentation process causes a natural carbonation effect, although this is often removed during processing, and replaced with forced carbonation.[7] Some of humanity's earliest known writings refer
                to the production and distribution of beer: the Code of Hammurabi included laws regulating beer and beer parlours,[8] and "The Hymn to Ninkasi", a prayer to the Mesopotamian goddess of beer, served as both a prayer and as a method of remembering
                the recipe for beer in a culture with few literate people.[9][10]Beer is the world's oldest[1][2][3] and most widely consumed[4] alcoholic drink; it is the third most popular drink overall, after water and tea.[5] The production of beer is called brewing, which involves the fermentation of sugars, mainly derived
                from cereal grain starches—most commonly from malted barley, although wheat, maize (corn), and rice are widely used.[6] Most beer is flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as
                herbs or fruit may occasionally be included. The fermentation process causes a natural carbonation effect, although this is often removed during processing, and replaced with forced carbonation.[7] Some of humanity's earliest known writings refer
                to the production and distribution of beer: the Code of Hammurabi included laws regulating beer and beer parlours,[8] and "The Hymn to Ninkasi", a prayer to the Mesopotamian goddess of beer, served as both a prayer and as a method of remembering
                the recipe for beer in a culture with few literate people.[9][10]
                <br /><br /><a onClick={this.props.incNumberTip}>Еще одна подсказка ∨</a>
              </div>
            </div>}
          {this.props.numberTip == 2 &&
            this.state.showTip &&
            <div class="HorizontalContainerTabTip Top40">
              <div class="HorizontalContainer_item_TabTip BlueBackground">
                <div class="VerticalText">
                  Подсказка {this.props.numberTip}
                </div>
              </div>
              <div class="HorizontalContainer_item_ContentTip">
               drink; it is the third most popular drink overall, after water and tea.[5] The production of beer is called brewing, which involves the fermentation of sugars, mainly derived
                from cereal grain starches—most commonly from malted barley, although wheat, maize (corn), and rice are widely used.[6] Most beer is flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as
                herbs or fruit may occasionally be included. The fermentation process causes a natural carbonation effect, although this is often removed during processing, and replaced with forced carbonation.[7] Some of humanity's earliest known writings refer
                to the production and distribution of beer: the Code of Hammurabi included laws regulating beer and beer parlours,[8] and "The Hymn to Ninkasi", a prayer to the Mesopotamian goddess of beer, served as both a prayer and as a method of remembering
                the recipe for beer in a culture with few literate people.[9][10]
                <br /><br /><a onClick={this.props.incNumberTip}>Получить ответ ∨</a>
                </div>
            </div>}
          {this.props.numberTip >= 3 &&
            this.state.showTip &&
            <div class="HorizontalContainerTabTip Top40">
              <div class="HorizontalContainer_item_TabTip GreenBackground">
                <div class="VerticalText">Ответ</div>
              </div>
              <div class="HorizontalContainer_item_ContentTip">
                Beer is the world's oldest[1][2][3] and most widely consumed[4] alcoholic drink; it is the third most popular drink overall, after water and tea.[5] The production of beer is called brewing, which involves the fermentation of sugars, mainly derived
                from cereal grain starches—most commonly from malted barley, although wheat, maize (corn), and rice are widely used.[6] Most beer is flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as
                herbs or fruit may occasionally be included. The fermentation process causes a natural carbonation effect, although this is often removed during processing, and replaced with forced carbonation.[7] Some of humanity's earliest known writings refer
                to the production and distribution of beer: the Code of Hammurabi included laws regulating beer and beer parlours,[8] and "The Hymn to Ninkasi", a prayer to the Mesopotamian goddess of beer, served as both a prayer and as a method of remembering
                the recipe for beer in a culture with few literate people.[9][10]Beer is the world's oldest[1][2][3] and most widely consumed[4] alcoholic drink; it is the third most popular drink overall, after water and tea.[5] The production of beer is called brewing, which involves the fermentation of sugars, mainly derived
                from cereal grain starches—most commonly from malted barley, although wheat, maize (corn), and rice are widely used.[6] Most beer is flavoured with hops, which add bitterness and act as a natural preservative, though other flavourings such as
                herbs or fruit may occasionally be included. The fermentation process causes a natural carbonation effect, although this is often removed during processing, and replaced with forced carbonation.[7] Some of humanity's earliest known writings refer
                to the production and distribution of beer: the Code of Hammurabi included laws regulating beer and beer parlours,[8] and "The Hymn to Ninkasi", a prayer to the Mesopotamian goddess of beer, served as both a prayer and as a method of remembering
                the recipe for beer in a culture with few literate people.[9][10]
              </div>
            </div>}
        </div>
      </p>
    );
  }
}
