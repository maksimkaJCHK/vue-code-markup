// Тема по умолчанию
export const cToDefault = (parameters) => {
  const color1 = '#212122';
  const color2 = "#ffc661";
  const color3 = "#5e5d5d";
  const color4 = "#fff";
  const color5 = "#454545";
  const color6 = "#60a802";
  const color7 = '#a9b7c6';
  const color8 = '#9876aa';
  const color9 = '#d4d4c9';
  const color10 = '#647f54';

  parameters.cmBg = color1;
  parameters.cmBorderRadius = '5px';
  parameters.cmTextFontSize = "1em";
  parameters.cmTextFontFamily = "inherit";
  parameters.cmTextLineHeight = "1.5em";
  parameters.cmMaxHeightBody = 'auto';
  // Заголовок
  parameters.cmHeaderPadding = '.5em 1em';
  parameters.cmHeaderFontSize = '1em';
  parameters.cmHeaderColor = color2;
  // Номера строк
  parameters.cmCountBg = color3;
  parameters.cmCountColor = color4;
  parameters.cmCountPadding = "0 .35em";
  parameters.cmCountBorderRight = color3;
  // Иконка скопировать код
  parameters.cmIconColor = color4;
  parameters.cmIconErrorColor = '#980505';
  parameters.cmIconIsCopyColor = color6;
  // Активная линия
  parameters.cmActiveBg = '#2a2a2b';
  parameters.cmActiveCountBg = color5;
  parameters.cmActiveCountColor = color4;
  parameters.cmActiveCountRightColor = color5;
  // Выделение текста
  parameters.cmSelectionBg = color10;
  parameters.cmSelectionColor = color4;
  // Полоса прокрутки
  parameters.cmScrollBarBg = color1;
  parameters.cmThumbBg = color2;
  // Стилизация строк кода
  parameters.cmNewBorder = color6;
  parameters.cmChangedBorder = '#6495ed';
  parameters.cmDeletedBorder = '#92000a';
  parameters.cmDeletedOpacity = '.6';
  // Стилизация общих компонентов
  parameters.cmMainColor = color7;
  parameters.cmTextColor = color10;
  parameters.cmNumberColor = '#6897bb';
  parameters.cmCommentColor = '#808080';
  // Стилизация компонентов шаблона
  parameters.cmTagColor = color2;
  parameters.cmAttrColor = color9;
  // Стилизация компонентов блока script
  parameters.cmKeyColor = color8,
  parameters.cmKeyWordsColor = '#cc7832';
  parameters.cmVariableColor = color8;
  parameters.cmFunctionColor = color2;
  // Стилизация компонентов стилей
  parameters.cmStyleClass = color2;
  parameters.cmStyleId = color2;
  parameters.cmStyleTag = color2;
  parameters.cmStyleKey = color9;
  parameters.cmStyleParam = color8;
  parameters.cmStyleUnitMes = color7;
  parameters.cmStyleAmpersand = color2;
  parameters.cmStyleCurlyBrace = color2;
}

export const cToMonokai = (parameters) => {
  const color1 = '#272822';
  const color2 = '#e3d977';
  const color3 = '#3d3d31';
  const color4 = '#fff';
  const color5 = '#c272d1';
  const color6 = '#f12d53';
  const color7 = '#8ce13d';

  cToDefault(parameters);

  parameters.cmBg = color1;
  // Заголовок
  parameters.cmHeaderColor = color2;
  // Номера строк
  parameters.cmCountBg = color1;
  parameters.cmCountColor = '#8b9686';
  parameters.cmCountBorderRight = color3;
  // Активная линия
  parameters.cmActiveBg = '#4a4a40';
  parameters.cmActiveCountBg = color1;
  parameters.cmActiveCountColor = '#c0c6ba';
  parameters.cmActiveCountRightColor = color3;
  // Выделение текста
  parameters.cmSelectionBg = color2;
  parameters.cmSelectionColor = '#000';
  // Полоса прокрутки
  parameters.cmScrollBarBg = color1;
  parameters.cmThumbBg = color2;
  // Стилизация строк кода
  parameters.cmNewBorder = color7;
  parameters.cmChangedBorder = '#6495ed';
  parameters.cmDeletedBorder = color6;
  // Стилизация общих компонентов
  parameters.cmMainColor = color4;
  parameters.cmTextColor = color2;
  parameters.cmNumberColor = color5;
  parameters.cmCommentColor = '#6f6d54';
  // Стилизация компонентов шаблона
  parameters.cmTagColor = color6;
  parameters.cmAttrColor = color7;
  // Стилизация компонентов блока script
  parameters.cmKeyColor = color4;
  parameters.cmKeyWordsColor = color6;
  parameters.cmVariableColor = color4;
  // Стилизация компонентов стилей
  parameters.cmStyleClass = color7;
  parameters.cmStyleId = color7;
  parameters.cmStyleTag = color6;
  parameters.cmStyleKey = color7;
  parameters.cmStyleParam = '#6495ed';
  parameters.cmStyleUnitMes = color6;
  parameters.cmStyleAmpersand = color6;
  parameters.cmStyleCurlyBrace = color5;
}