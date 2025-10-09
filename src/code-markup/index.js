import CodeMarkup from '@/code-markup/codemarkup.vue';

import CodeLine from '@/code-markup/components/CodeLine.vue';

// Для шаблона
import MuTag from '@/code-markup/markup/template/MuTag.vue';
import MuAttr from '@/code-markup/markup/template/MuAttr.vue';
// Общие
import MuText from '@/code-markup/markup/MuText.vue';
import MuNumber from '@/code-markup/markup/MuNumber.vue';
import MuComment from '@/code-markup/markup/MuComment.vue';
import MuType from '@/code-markup/markup/MuType.vue';
// Для секции скриптов
import MuKey from '@/code-markup/markup/script/MuKey.vue';
import MuKeyWords from '@/code-markup/markup/script/MuKeyWords.vue';
import MuVariable from '@/code-markup/markup/script/MuVariable.vue';
// Для блока стилей
import MuStyleClass from '@/code-markup/markup/style/MuStyleClass.vue';
import MuStyleId from '@/code-markup/markup/style/MuStyleId.vue';
import MuStyleTag from '@/code-markup/markup/style/MuStyleTag.vue';
import MuStyleKey from '@/code-markup/markup/style/MuStyleKey.vue';
import MuStyleParam from '@/code-markup/markup/style/MuStyleParam.vue';
import MuStyleUnitMeas from '@/code-markup/markup/style/MuStyleUnitMeas.vue';
import MuStyleAmpersand from '@/code-markup/markup/style/MuStyleAmpersand.vue';
import MuStyleCurlyBrace from '@/code-markup/markup/style/MuStyleCurlyBrace.vue';

export default {
  install(app) {
    app.component('code-markup', CodeMarkup);
    app.component('code-line', CodeLine);
    // Для шаблона
    app.component('mu-tag', MuTag);
    app.component('mu-attr', MuAttr);
    // Общие
    app.component('mu-text', MuText);
    app.component('mu-number', MuNumber);
    app.component('mu-comment', MuComment);
    app.component('mu-type', MuType);
    // Для секции скриптов
    app.component('mu-key', MuKey);
    app.component('mu-key-words', MuKeyWords);
    app.component('mu-variable', MuVariable);
    // Стили
    app.component('mu-style-class', MuStyleClass);
    app.component('mu-style-id', MuStyleId);
    app.component('mu-style-tag', MuStyleTag);
    app.component('mu-style-key', MuStyleKey);
    app.component('mu-style-param', MuStyleParam);
    app.component('mu-style-unit-meas', MuStyleUnitMeas);
    app.component('mu-style-ampersand', MuStyleAmpersand);
    app.component('mu-style-curly-brace', MuStyleCurlyBrace);
  }
}

export {
  CodeMarkup,
  CodeLine,
  MuTag,
  MuAttr,
  MuText,
  MuNumber,
  MuComment,
  MuKey,
  MuKeyWords,
  MuVariable,
  MuStyleClass,
  MuStyleId,
  MuStyleTag,
  MuStyleKey,
  MuStyleParam,
  MuStyleUnitMeas,
  MuStyleAmpersand,
  MuStyleCurlyBrace,
}