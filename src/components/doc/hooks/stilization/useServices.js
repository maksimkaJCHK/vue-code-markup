import { computed } from 'vue';

const useServices = (parameters) => {
  const stylesComp = computed(() => ({
    '--cm-bg': parameters.cmBg,
    '--cm-border-radius': parameters.cmBorderRadius,
    '--cm-text-font-size': parameters.cmTextFontSize,
    '--cm-text-font-family': parameters.cmTextFontFamily,
    '--cm-text-line-height': parameters.cmTextLineHeight,
    '--cm-count-padding': parameters.cmCountPadding,
    '--cm-max-height-body': parameters.cmMaxHeightBody,
    '--cm-header-padding': parameters.cmHeaderPadding,
    '--cm-header-font-size': parameters.cmHeaderFontSize,
    '--cm-header-color': parameters.cmHeaderColor,
    '--cm-count-bg': parameters.cmCountBg,
    '--cm-count-color': parameters.cmCountColor,
    '--cm-count-border-right': parameters.cmCountBorderRight,
    '--cm-icon-color': parameters.cmIconColor,
    '--cm-icon-error-color': parameters.cmIconErrorColor,
    '--cm-icon-is-copy-color': parameters.cmIconIsCopyColor,
    '--cm-active-bg': parameters.cmActiveBg,
    '--cm-active-count-bg': parameters.cmActiveCountBg,
    '--cm-active-count-color': parameters.cmActiveCountColor,
    '--cm-active-count-right-color': parameters.cmActiveCountRightColor,
    '--cm-selection-bg': parameters.cmSelectionBg,
    '--cm-selection-color': parameters.cmSelectionColor,
    '--cm-scroll-bar-bg': parameters.cmScrollBarBg,
    '--cm-thumb-bg': parameters.cmThumbBg,
    '--cm-new-border': parameters.cmNewBorder,
    '--cm-changed-border': parameters.cmChangedBorder,
    '--cm-deleted-border': parameters.cmDeletedBorder,
    '--cm-deleted-opacity': parameters.cmDeletedOpacity,
    '--cm-main-color': parameters.cmMainColor,
    '--cm-text-color': parameters.cmTextColor,
    '--cm-number-color': parameters.cmNumberColor,
    '--cm-comment-color': parameters.cmCommentColor,
    '--cm-tag-color': parameters.cmTagColor,
    '--cm-attr-color': parameters.cmAttrColor,
    '--cm-key-color': parameters.cmKeyColor,
    '--cm-key-words-color': parameters.cmKeyWordsColor,
    '--cm-variable-color': parameters.cmVariableColor,
    '--cm-function-color': parameters.cmFunctionColor,
    '--cm-style-class': parameters.cmStyleClass,
    '--cm-style-id': parameters.cmStyleId,
    '--cm-style-tag': parameters.cmStyleTag,
    '--cm-style-key': parameters.cmStyleKey,
    '--cm-style-param': parameters.cmStyleParam,
    '--cm-style-unit-mes': parameters.cmStyleUnitMes,
    '--cm-style-ampersand': parameters.cmStyleAmpersand,
    '--cm-style-curly-brace': parameters.cmStyleCurlyBrace,
  }));

  const codeComp = computed(() => `.code-markup_theme-some-theme {
  --cm-bg: ${parameters.cmBg};
  --cm-border-radius: ${parameters.cmBorderRadius};
  --cm-main-color: ${parameters.cmMainColor};
  --cm-text-font-size: ${parameters.cmTextFontSize};
  --cm-text-font-family: ${parameters.cmTextFontFamily};
  --cm-text-line-height: ${parameters.cmTextLineHeight};
  --cm-max-height-body: ${parameters.cmMaxHeightBody};

  /* Styling the window title with the code */
  --cm-header-padding: ${parameters.cmHeaderPadding};
  --cm-header-font-size: ${parameters.cmHeaderFontSize};
  --cm-header-color: ${parameters.cmHeaderColor};

  /* Stylization of line numbers */
  --cm-count-bg: ${parameters.cmCountBg};
  --cm-count-color: ${parameters.cmCountColor};
  --cm-count-padding: ${parameters.cmCountPadding};
  --cm-count-border-right: ${parameters.cmCountBorderRight};

  /* Stylization of "copy code" icons */
  --cm-icon-color: ${parameters.cmIconColor};
  --cm-icon-error-color: ${parameters.cmIconErrorColor};
  --cm-icon-is-copy-color: ${parameters.cmIconIsCopyColor};

  /* Styling the active line */
  --cm-active-bg: ${parameters.cmActiveBg};
  --cm-active-count-bg: ${parameters.cmActiveCountBg};
  --cm-active-count-color: ${parameters.cmActiveCountColor};
  --cm-active-count-right-color: ${parameters.cmActiveCountRightColor};

  /* Stylization text selection */
  --cm-selection-bg: ${parameters.cmSelectionBg};
  --cm-selection-color: ${parameters.cmSelectionColor};

  /* Styling the scrollbar */
  --cm-scroll-bar-bg: ${parameters.cmScrollBarBg};
  --cm-thumb-bg: ${parameters.cmThumbBg};

  /* Stylization "lines of code" */
  --cm-new-border: ${parameters.cmNewBorder};
  --cm-changed-border: ${parameters.cmChangedBorder};
  --cm-deleted-border: ${parameters.cmDeletedBorder.value};
  --cm-deleted-opacity: ${parameters.cmDeletedOpacity};

  /* Styling common components */
  --cm-main-color: ${parameters.cmMainColor};
  --cm-text-color: ${parameters.cmTextColor};
  --cm-number-color: ${parameters.cmNumberColor};
  --cm-comment-color: ${parameters.cmCommentColor};

  /* Styling template components */
  --cm-tag-color: ${parameters.cmTagColor};
  --cm-attr-color: ${parameters.cmAttrColor};

  /* Stylization of the "script" block components */
  --cm-key-color: ${parameters.cmKeyColor};
  --cm-key-words-color: ${parameters.cmKeyWordsColor};
  --cm-variable-color: ${parameters.cmVariableColor};
  --cm-function-color: ${parameters.cmFunctionColor};

  /* Stylization of the "style" block components */
  --cm-style-class: ${parameters.cmStyleClass};
  --cm-style-id: ${parameters.cmStyleId};
  --cm-style-tag: ${parameters.cmStyleTag};
  --cm-style-key: ${parameters.cmStyleKey};
  --cm-style-param: ${parameters.cmStyleParam};
  --cm-style-unit-mes: ${parameters.cmStyleUnitMes};
  --cm-style-ampersand: ${parameters.cmStyleAmpersand};
  --cm-style-curly-brace: ${parameters.cmStyleCurlyBrace};
}`);

  return {
    stylesComp,
    codeComp
  }
}

export default useServices;