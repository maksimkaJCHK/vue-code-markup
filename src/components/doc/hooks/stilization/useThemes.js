const useThemes = (parameters) => {
  // Тема по умолчанию
  const cToDefault = (parameters) => {
    parameters.cmBg ='#212122';
    parameters.cmBorderRadius = '5px';
    parameters.cmTextFontSize = "1em";
    parameters.cmTextFontFamily = "inherit";
    parameters.cmTextLineHeight = "1.5em";
    parameters.cmMaxHeightBody = 'auto';
    // Заголовок
    parameters.cmHeaderPadding = '.5em 1em';
    parameters.cmHeaderFontSize = '1em';
    parameters.cmHeaderColor = '#ffc661';
    // Номера строк
    parameters.cmCountBg = '#5e5d5d';
    parameters.cmCountColor = '#fff';
    parameters.cmCountPadding = "0 .35em";
    parameters.cmCountBorderRight = '#5e5d5d';
    // Иконка скопировать код
    parameters.cmIconColor = '#fff';
    parameters.cmIconErrorColor = '#980505';
    parameters.cmIconIsCopyColor = '#60a802';
    // Активная линия
    parameters.cmActiveBg = '#2a2a2b';
    parameters.cmActiveCountBg = '#454545';
    parameters.cmActiveCountColor = '#fff';
    parameters.cmActiveCountRightColor = '#454545';
    // Выделение текста
    parameters.cmSelectionBg = '#647f54';
    parameters.cmSelectionColor = '#fff';
    // Полоса прокрутки
    parameters.cmScrollBarBg = '#212122';
    parameters.cmThumbBg = '#ffc661';
    // Стилизация строк кода
    parameters.cmNewBorder = '#60a802';
    parameters.cmChangedBorder = '#6495ed';
    parameters.cmDeletedBorder = '#92000a';
    parameters.cmDeletedOpacity = '.6';
    // Стилизация общих компонентов
    parameters.cmMainColor = '#a9b7c6';
    parameters.cmTextColor = '#647f54';
    parameters.cmNumberColor = '#6897bb';
    parameters.cmCommentColor = '#808080';
    // Стилизация компонентов шаблона
    parameters.cmTagColor = '#ffc661';
    parameters.cmAttrColor = '#d4d4c9';
    // Стилизация компонентов блока script
    parameters.cmKeyColor = '#9876aa',
    parameters.cmKeyWordsColor = '#cc7832';
    parameters.cmVariableColor = '#9876aa';
    parameters.cmFunctionColor = '#ffc661';
    // Стилизация компонентов стилей
    parameters.cmStyleClass = '#ffc661';
    parameters.cmStyleId = '#ffc661';
    parameters.cmStyleTag = '#ffc661';
    parameters.cmStyleKey = '#d4d4c9';
    parameters.cmStyleParam = '#9876aa';
    parameters.cmStyleUnitMes = '#a9b7c6';
    parameters.cmStyleAmpersand = '#ffc661';
    parameters.cmStyleCurlyBrace = '#ffc661';
  }

  const cToMonokai = (parameters) => {
    cToDefault(parameters);

    parameters.cmBg ='#272822';
    // Заголовок
    parameters.cmHeaderColor = '#e3d977';
    // Номера строк
    parameters.cmCountBg = '#5e5d5d';
    parameters.cmCountColor = '#fff';
    parameters.cmCountPadding = "0 .35em";
    parameters.cmCountBorderRight = '#5e5d5d';
    // Иконка скопировать код
    parameters.cmIconColor = '#fff';
    parameters.cmIconErrorColor = '#980505';
    parameters.cmIconIsCopyColor = '#60a802';
    // Активная линия
    parameters.cmActiveBg = '#2a2a2b';
    parameters.cmActiveCountBg = '#454545';
    parameters.cmActiveCountColor = '#fff';
    parameters.cmActiveCountRightColor = '#454545';
    // Выделение текста
    parameters.cmSelectionBg = '#647f54';
    parameters.cmSelectionColor = '#fff';
    // Полоса прокрутки
    parameters.cmScrollBarBg = '#212122';
    parameters.cmThumbBg = '#ffc661';
    // Стилизация строк кода
    parameters.cmNewBorder = '#60a802';
    parameters.cmChangedBorder = '#6495ed';
    parameters.cmDeletedBorder = '#92000a';
    parameters.cmDeletedOpacity = '.6';
    // Стилизация общих компонентов
    parameters.cmMainColor = '#a9b7c6';
    parameters.cmTextColor = '#647f54';
    parameters.cmNumberColor = '#6897bb';
    parameters.cmCommentColor = '#808080';
    // Стилизация компонентов шаблона
    parameters.cmTagColor = '#ffc661';
    parameters.cmAttrColor = '#d4d4c9';
    // Стилизация компонентов блока script
    parameters.cmKeyColor = '#9876aa',
    parameters.cmKeyWordsColor = '#cc7832';
    parameters.cmVariableColor = '#9876aa';
    parameters.cmFunctionColor = '#ffc661';
    // Стилизация компонентов стилей
    parameters.cmStyleClass = '#ffc661';
    parameters.cmStyleId = '#ffc661';
    parameters.cmStyleTag = '#ffc661';
    parameters.cmStyleKey = '#d4d4c9';
    parameters.cmStyleParam = '#9876aa';
    parameters.cmStyleUnitMes = '#a9b7c6';
    parameters.cmStyleAmpersand = '#ffc661';
    parameters.cmStyleCurlyBrace = '#ffc661';
  }
}

export default useThemes;