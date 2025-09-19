import CodeMarkup from '@/code-markup/codemarkup.vue';

import CodeLine from '@/code-markup/components/CodeLine.vue';

// Для шаблона
import MuTag from '@/code-markup/markup/template/MuTag.vue';
import MuAttr from '@/code-markup/markup/template/MuAttr.vue';
// Общие
import MuText from '@/code-markup/markup/MuText.vue';
import MuNumber from '@/code-markup/markup/MuNumber.vue';
import MuComment from '@/code-markup/markup/MuComment.vue';
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