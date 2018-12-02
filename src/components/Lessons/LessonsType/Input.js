import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getNameLesson, isEmptyStr} from '../../../lib/str';
import {
  incrementCountRightAnswers,
  initCountRightAnswers,
} from '../../../actions';
import TemplateInput from './TemplateInput';

class LessonInput extends PureComponent {
  static propTypes = {
    answers: PropTypes.array.isRequired,
    arrTemplate: PropTypes.array.isRequired,
    incrementCountRightAnswers: PropTypes.func.isRequired,
    initCountRightAnswers: PropTypes.func.isRequired,
  };

  handleConfirm = event => {
    const {incrementCountRightAnswers, initCountRightAnswers} = this.props;
    // показать ошибку
    let errorTag = document.getElementById ('textError');
    let iRightAnswer = 0;
    errorTag.innerHTML = '';
    errorTag.className = '';

    if (
      event.target &&
      event.target.id &&
      event.target.className == 'InputAnswer'
    ) {
      this.props.arrTemplate.forEach ((item, i) => {
        let idTag = 'IDAnswer' + i;
        let tagInput = document.getElementById (idTag);

        if (tagInput)
          if (isNaN (tagInput.value)) {
            // введено не число
            tagInput.value = '';

            // показать ошибку
            errorTag.className = 'error';
            errorTag.innerHTML =
              'Вы ввели не число. Введите число, пожалуйста.';
          } else if (tagInput.value == this.props.answers[i - 1])
            iRightAnswer++;
      });
    }

    if (iRightAnswer == this.props.answers.length && iRightAnswer > 0)
      incrementCountRightAnswers ();
    else initCountRightAnswers ();
  }; //~handleConfirm

  render () {
    return (
      <div>

        <TemplateInput
          arrTemplate={this.props.arrTemplate}
          answers={[]}
          prefixIdInput="IDAnswer"
          idForm="formLessonInput"
          inputClass="InputAnswer"
        />

        <p id="textError" class="small space45 colorRed" />
      </div>
    );
  } //~render

  componentDidMount () {
    formLessonInput.addEventListener ('blur', this.handleConfirm, true);
  } //~componentDidMount
}

let mapStateToProps = state => {
  let answers = [];
  let template = '';
  let questions = [];
  let currentTask = state.currentTask;
  let lesson = getNameLesson (location.hash);
  let arrTemplate = [];

  if (lesson.length > 1) questions = state.dataLessons[lesson].questions;

  if (
    Array.isArray (questions) &&
    questions.length > 0 &&
    typeof currentTask == 'number'
  ) {
    answers = questions[currentTask].answers;
    template = questions[currentTask].template;

    if (!isEmptyStr (template)) arrTemplate = template.split (':?');
  }

  if (!Array.isArray (answers)) answers = [];

  return {
    answers: answers,
    arrTemplate: arrTemplate,
  };
};

// Объект с генераторами действий
const mapDispatchToProps = {
  incrementCountRightAnswers: incrementCountRightAnswers,
  initCountRightAnswers: initCountRightAnswers,
};

export default connect (mapStateToProps, mapDispatchToProps) (LessonInput);
