import { reactive } from 'vue';

const useParameters = () => {
  const parameters = reactive({
    cmBg:'#212122',
    cmBorderRadius: '5px',
    cmTextFontSize: "1em",
    cmTextFontFamily: "inherit",
    cmTextLineHeight: "1.5em",
    cmMaxHeightBody: 'auto',
    // Заголовок
    cmHeaderPadding: '.5em 1em',
    cmHeaderFontSize: '1em',
    cmHeaderColor: '#ffc661',
    // Номера строк
    cmCountBg: '#5e5d5d',
    cmCountColor: '#fff',
    cmCountPadding: "0 .35em",
    cmCountBorderRight: '#5e5d5d',
    // Иконка скопировать код
    cmIconColor: '#fff',
    cmIconErrorColor: '#980505',
    cmIconIsCopyColor: '#60a802',
    // Активная линия
    cmActiveBg: '#2a2a2b',
    cmActiveCountBg: '#454545',
    cmActiveCountColor: '#fff',
    cmActiveCountRightColor: '#454545',
    // Выделение текста
    cmSelectionBg: '#647f54',
    cmSelectionColor: '#fff',
    // Полоса прокрутки
    cmScrollBarBg: '#212122',
    cmThumbBg: '#ffc661',
    // Стилизация строк кода
    cmNewBorder: '#60a802',
    cmChangedBorder: '#6495ed',
    cmDeletedBorder: '#92000a',
    cmDeletedOpacity: '.6',
    // Стилизация общих компонентов
    cmMainColor: '#a9b7c6',
    cmTextColor: '#647f54',
    cmNumberColor: '#6897bb',
    cmCommentColor: '#808080',
    // Стилизация компонентов шаблона
    cmTagColor: '#ffc661',
    cmAttrColor: '#d4d4c9',
    // Стилизация компонентов блока script
    cmKeyColor: '#9876aa',
    cmKeyWordsColor: '#cc7832',
    cmVariableColor: '#9876aa',
    cmFunctionColor: '#ffc661',
    // Стилизация компонентов стилей
    cmStyleClass: '#ffc661',
    cmStyleId: '#ffc661',
    cmStyleTag: '#ffc661',
    cmStyleKey: '#d4d4c9',
    cmStyleParam: '#9876aa',
    cmStyleUnitMes: '#a9b7c6',
    cmStyleAmpersand: '#ffc661',
    cmStyleCurlyBrace: '#ffc661',
  });

  return parameters;
}

export default useParameters;