# Vue code markup

English | [Русский](./README.ru.md) 

This plugin was created to document the code. Usually, "[storybook](https://storybook.js.org/)" is used for this, but this is not suitable for cases where the person for whom this code is being documented is not a frontend developer. He won't understand storybook. I needed to write one component for "vue.js" and describe how it works for the backend developer so that he can use it. In fact, it was a detailed instruction on how to use the basics of "vue.js", with many examples.

I use Visual Studio Code as an editor, I really like the darcula theme, and I took it as the main one for my plugin. In the future, I plan to make other themes: "monokai", "GitHub theme", etc. If you have the task of documenting the code, then I think my plugin will suit you. There are other plugins that allow you to output the code, but there are essentially 2-3 colors, and they are not bright. With my plugin, your documentation will become brighter.

The main focus will be on writing documentation for vue.js components.

## Global installation, plug-in connection

To install my plugin, you need to have node installed.js and npm are the latest versions. Enter the following command in the terminal:

```bash
npm install vue-code-markup
```

After installation, if no errors occur, you need to connect my plugin in the following way:

```js
import { createApp } from 'vue';
import App from './App.vue';
import CodeMarkup from 'vue-code-markup';
import 'vue-code-markup/lib/style.css';

const app = createApp(App);
app.use(CodeMarkup);
app.mount('#app');
```

It is possible to connect only CSS and individual components, as I will describe below.

## Main components

These are the components that all other components should be wrapped in. Without them, all styling makes no sense. These are "code-markup" and "code-line". Code markup is the most important component, all other components should be wrapped in it. In fact, it is an editor window containing lines of code and code examples. A code-line is a line or string with a code, all other components must be wrapped with it.

### The code markup component

This is the most important component, it serves as a wrapper for all other components. If you do not want to do a full installation, then you can connect it in the following way:

```vue
<template>
  <code-markup>
    <!-- component content -->
  </code-markup>
</template>

<script setup>
  import { CodeMarkup } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</script>
```

I would advise you to look at the documentation on [github pages](https://maksimkajchk.github.io/vue-code-markup/), you can change the parameters there and see what changes. This component has the following input parameters:

**theme** - this parameter is responsible for the theme that will be applied to the window with the code. At this point in time, I have implemented 2 themes: "darcula" and "monokai". "Darcula", the default theme, if you set a non-existent theme name, or do not set this parameter, it will be applied. You can insert any topic name into this parameter. In this case, you will need to style the component using the following class - "code-markup_theme-${name of your theme}. I will describe how to create my own theme below.

**isHeader** - this parameter is responsible for displaying the title of the window with the code. If you are going to display the title, then you do not need to set this parameter, it is set to "true" by default.

**header** is the title of the window with the code. It doesn't matter by default.

**isCount** - this parameter is responsible for displaying the row number. If it is not set, the rows will be numbered, the default value is "true".

**lineCount** - this parameter is responsible for how many lines to display. You need to pass numbers to it, if you want to display all the lines, then you need to set the value to "auto", or not set this parameter at all. The default value is "auto".

**textBold** - this parameter is responsible for the "font thickness". The default value is set to "false".

**headerBold** - this parameter is responsible for the font thickness of the title of the window with the code. The default value is set to "false".

**code** - a code is passed to this parameter, which will need to be copied to the clipboard. It can be either a string or an object.

**title** is a hint that will appear when you hover over the "copy text" icon. The default value is "Copy code to clipboard". As a rule, this is necessary for internationalization.

**successfulText** is a hint that will appear when you hover over the "copy text" icon after the text has been copied. The default value is "The code is copied to the clipboard". As a rule, this is necessary for internationalization.

**errorText** is a hint that will appear when you hover over the "copy text" icon in case of an error (if the text cannot be copied). By default, the value is set to "An error occurred while copying the code to the clipboard". As a rule, this is necessary for internationalization.

### The code-line component

In fact, this is a line or a line with a code. The code elements must be located in this component. It is connected in the following way:

```vue
<template>
  <code-markup>
    <code-line>
      <!-- component content -->
    </code-line>
  </code-markup>
</template>

<script setup>
  import { CodeMarkup, CodeLine } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</script>
```

Input parameters such as "new", "deleted" and "changed" were taken from Visual Studio Code. They display the new one, the deleted one, and the row where the changes occurred. Only one of these input parameters should be applied to the "code-line" component. Initially, I wanted to set some parameter, for example, "type" and pass one of these three values to it ("new", "deleted" and "changed"), but still I decided to abandon it. You can simply set the "new" parameter and the row will be displayed as a new one. It will be more convenient this way. If you set the input parameters "deleted" and "changed" for the "code-line" component, the line will be displayed as changed, but it will have transparent text from the input parameter "deleted". Styles for the "new" input parameter will have the lowest priority, keep this in mind. So, this component has the following input parameters:

**new** - In Visual Studio Code, when a new line is added, it is displayed with a right vertical line that separates the line number and the line text. This parameter displays this line. The vertical line will be visible only if the line numbers are displayed (the is-count parameter is enabled). By default, this parameter is disabled, it has the value false.

**deleted** - In Visual Studio Code, when a line is deleted, it is displayed with a right vertical line that separates the line number and the line text. This parameter displays this line. The vertical line will be visible only if the line numbers are displayed (the is-count parameter is enabled). By default, this parameter is disabled, it has the value false. I also make this line slightly transparent to show that it has been deleted.

**changed** - in Visual Studio Code, when any changes occur on a line, it is displayed with a right vertical line that separates the line number and the line text. This parameter displays this line. The vertical line will be visible only if the line numbers are displayed (the is-count parameter is enabled). By default, this parameter is disabled, it has the value false.

**active** - in Visual Studio Code, the active line differs from other background lines. This parameter enables the background for the string. By default, this parameter is disabled, it has the value false.

**lineThrough** - makes the text strikethrough. When documenting the code, this input parameter can say that this line of code is no longer relevant, deleted, or replaced with another line.

**bold** - makes the text bold. As a rule, this is necessary in order to highlight a line and separate it from other lines. Make sure that users pay attention to it.

**nonBold** - makes the text plain, not bold, even if the input parameter "textBold" is set for the parent component "code-markup". This parameter can be useful if you need to select all lines except certain ones. Bold text will attract attention, while plain text will show that these lines have not changed or are not important.

**visibleCopy** - by default, the inner right indentation for a line is 5px. It is possible that there are not many lines and they are long enough, so the "copy text" button will overlap the text of the line. When this option is enabled, a larger right indentation will appear, so that the text can be read. By default, this parameter is disabled, it has the value false.

**evel-2 - level-8** - the code has a certain nesting. These input parameters are needed in order to make the appropriate indentation. In total, I have provided 8 levels of nesting, I don't see any point in doing more.

## Components for document markup

When compared with HTML, these components can be called the tags that make up the document. As a rule, most of the input parameters are the same as those of the "code-line" component. Their main purpose is to highlight specific pieces of code. For example, we can make the entire line bold, but some specific piece of code is not. Or we can make a certain piece of code bold, or crossed out, or translucent. All these components have the following input parameters:

*   **code** is the input parameter to which the text is passed to display the code elements. If you need to add images to the code, you can do without this input parameter. Just wrap the right piece of code with these components, these components have the right slots. If you do not have such a need, then I would advise you to use this input parameter anyway. If it is set, the contents of the input parameter "code" will be output.
*   **lineThrough** - this input parameter makes the code element strikethrough. In fact, the "code-line" component also has this input parameter, and it does the same thing.
*   **bold** - this input parameter makes the code element bold. In fact, the "code-line" component also has this input parameter, and it does the same thing.
*   **nonBold** - this input parameter makes the text plain, not bold. Even if the "bold" input parameter is set for the "code-line" parent component, or the "textBold" input parameter is set for the "code-markup" component, the text will still be normal. In fact, the "code-line" component also has this input parameter, and it does the same thing.
*   **inactive** - this input parameter does not make the code text very transparent. This is a good way to draw attention to certain parts of the code.

Conventionally, all components for marking up a document can be divided into common components, components in the template block, components in the script block, and components in the styles block.

### Common document markup components

The following components are common to the template block, scripts, and styles:

*   **MuText** is plain text, in markup it is what is enclosed in single or double quotes.
*   **MuNumber** is all the numbers that occur in the markup.
*   **MuComment** - these are all comments that occur in the markup.
*   **MuType** is a standard text. If you wrap some text with the "code-line" component, the wrapped text will be the same color as the color of the "MuType" component.

Example of connecting common components:

### Components for the template block

These are the components that are in the "template" block. These components also include the "template", "script", and "style" blocks themselves. There are only 2 such components:

*   **MuTag** are the tags of the "template" block, as well as the names of the "template", "script", and "style" blocks.
*   **MuAttr** are tag attributes, for example, "setup" for the "script" block.

Example of connecting template components:

```vue
<template>
  <code-markup>
    <code-line>
      <mu-tag code="<script" />
      <mu-attr code=" setup" />
      <mu-tag code=">" />
    </code-line>
    <code-line>
      <mu-tag :code="`</${'script'}>`" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import {
    CodeMarkup,
    CodeLine,
    MuTag,
    MuAttr,
  } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</script>
```

### Components for the script block

These are the components that are in the "script" block. I'll list them below.

*   **MuKey** - if you need to display an object, then this component is used to write the object's key.
*   **MuKeyWords** are keywords. In JS, such words are import, export, const, let, var, fucntion, and so on.
*   **MuVariable** - if you need to display the name of a variable, this component is used.
*   **MuFunction** - if you need to display the function name, this component is used.

Example of connecting components for a script block:

```vue
<template>
  <code-markup>
    <code-line>
      <mu-key-words code="const " />
      <mu-variable code="someObject" />
      =
      <mu-key-words code="ref" />
      ({
    </code-line>
    <code-line level-2>
      <mu-key code="key" />
      : value
    </code-line>
    <code-line>
    });
    </code-line>

    <code-line />

    <code-line>
      <mu-key-words code="function "/>
      <mu-function code="exampleFunction() "/>{
    </code-line>
    <code-line level-2>
      <mu-key-words code="return "/>
      <mu-variable code="someObject"/>
      ;
    </code-line>
    <code-line>
    }
    </code-line>
  </code-markup>
</template>

<script setup>
  import {
    CodeMarkup,
    CodeLine,
    MuKey,
    MuKeyWords,
    MuVariable,
    MuFunction,
  } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</script>
```

### Components for the style block

These are the components that are located in the "style" block. I'll list them below:

*   **MuStyleClass** - this component is used to output classes.
*   **MuStyleId** - this component is used to output IDs.
*   **MuStyleTag** - this component is used to output tags.
*   **MuStyleKey** - if you need to output the preprocessor code (less or sass), then this component is needed to create nested rules. For example, if we have a class."book", and it contains the CSS component "&-item", then "&-item" needs to be displayed using "MuStyleKey".
*   **MuStyleParam** - you will need to put the CSS properties of the element in this component. To explain in more detail, these properties are margin, padding, font-size, and so on.
*   **MuStyleUnitMeas** - this component is needed to output units of measurement (em. rem, px, etc.).
*   **MuStyleAmpersand** - this component is needed to output the ampersand (&).
*   **MuStyleCurlyBrace** - this component is needed to output curly braces.

These components are connected in the following way:

```vue
<template>
  <code-markup>
    <code-line>
      <mu-style-id code="#books-list {" />
    </code-line>
    <code-line level-2>
      <mu-style-param code="margin" />:
      <mu-number code=" 1" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />
      <mu-number code="2.5" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line>
      <mu-style-id code="}" />
    </code-line>
    <code-line />
    <code-line>
      <mu-style-class code=".books-list {" />
      </code-line>
    <code-line level-2 >
      <mu-style-param code="line-height" />:
      <mu-number code=" 1.2" />;
      </code-line>
    <code-line />
    <code-line level-2 >
      <mu-style-tag code="h3 {" />
    </code-line>
    <code-line level-3 >
      <mu-style-param code="font-size" />:
      <mu-number code="1.2" />
      <mu-style-unit-meas code="em" />;
    </code-line>
    <code-line level-3 >
      <mu-style-param code="margin" />:
      <mu-number code=".4" />
      <mu-style-unit-meas code="em" />;
      <mu-number code=" 0 " />
      <mu-number code=".3" />
      <mu-style-unit-meas code="em" />
    </code-line>
    <code-line level-2 >
      <mu-style-tag code="}" />
      </code-line>
    <code-line />
    <code-line level-2 >
      <mu-style-ampersand code="&" />
      <mu-style-key code="-item" />
      <mu-style-curly-brace code=" {" />
    </code-line>
    <code-line level-3 >
      <mu-style-param code="margin" />:
      <mu-number code="1.5" />
      <mu-style-unit-meas code="em" />
      <mu-number code=" 0 " />;
    </code-line>
    <code-line level-2 >
      <mu-style-curly-brace code="}" />;
    </code-line>
    <code-line>
      <mu-style-class code="}" />
    </code-line>
  </code-markup>
</template>

<script setup>
  import {
    CodeMarkup,
    CodeLine,
    MuStyleClass,
    MuStyleId,
    MuStyleTag,
    MuStyleKey,
    MuStyleParam,
    MuStyleUnitMeas,
    MuStyleAmpersand,
    MuStyleCurlyBrace,
  } from 'vue-code-markup';
  import 'vue-code-markup/lib/style.css';
</script>
```

## Slots

For this section, it's worth starting with an example right away, so it will be clearer:

```vue
<template>
  <code-markup>
    <template #default>
      <!-- The default code is inserted here if no other templates are specified -->
    </template>
    <template #header>
      <!-- The header of the window with the code is inserted here -->
    </template>

    <!-- Below are slots for the icons "copy text", "text successfully copied" and the icon when an error occurred while copying text to the clipboard -->
    <template #copy>
      <!-- The "copy text" icon is inserted here -->
    </template>
    <template #success>
      <!-- An icon is inserted here when the text has been successfully copied to the clipboard -->
    </template>
    <template #error>
      <!-- An icon is inserted here if an error occurred while copying text to the clipboard -->
    </template>
  </code-markup>
</template>
```

I think the example above perfectly shows how to use the slots, but still I will describe them below.

*   **default** is the default slot. If you don't need other slots, then this will be the slot when you wrap something with the "code-markup" component.
*   **header** is a slot for the title of the window with the code. To display it, the input parameter "isHeader" must be set to "true". If the input parameter "header" is set, it will be output, not the contents of the slot. As a rule, this slot is needed in order to insert text with an icon, some HTML content, or some VUE component in place of the title of the window with the code.js, attach some logic to the header. On this page, I make tabs through this slot.

Below there are slots for the icons "copy text", "text successfully copied" and the icon when an error occurred while copying text to the clipboard.

*   **copy** - this slot is needed to replace the "copy text" icon. You can insert an image or an svg into it. The image or svg will take up the entire width, I'm not touching the height. It is better to insert a square icon here. The space for this slot will have a width and height of "1em".
*   **success** - this slot is needed to replace the icon when the text has been successfully copied to the clipboard. You can also insert an image or an svg into it. The image or svg will take up the entire width, I'm not touching the height. It is better to insert a square icon here. The space for this slot will have a width and height of "1em".
*   **error** - this slot is needed to replace the icon when an error occurred while copying text to the clipboard. You can also insert an image or an svg into it. The image or svg will take up the entire width, I'm not touching the height. It is better to insert a square icon here. The space for this slot will have a width and height of "1em".

### Stylization of components

This section will focus on how to create your own themes, or style existing themes to fit your project. This section is closely related to the "theme" input parameter for the "code-markup" component. At this point in time, I have made 2 themes: "darcula" and "monokai". I took the theme "darcula" as a basis, because I like it the most.

In order to create your own theme, you need to add the name of your theme to the input parameter "theme". If you set the theme name to "some-theme", then the CSS styling class will look like this: "code-markup\_theme-**some-theme**".

I would advise you to open [this page](https://maksimkajchk.github.io/vue-code-markup/ ), and a description of the styling of the components there. You can select CSS variables on it and see how it will look.

### General settings

**\--cm-bg** - this CSS variable is responsible for the "background" of the window with the code.

**\--cm-border-radius** - this CSS variable is responsible for the "border-radius" of the window with the code.

**\--cm-text-font-size** - this CSS variable is responsible for the "font-size" of the window with the code.

**\--cm-text-font-family** - this CSS variable is responsible for the font family of the window with the code.

**\--cm-text-line-height** - this CSS variable is responsible for the "line-height" of the window with the code.

**\--cm-max-height-body** - this CSS variable is responsible for the "max-height" of the code window without a header.

### Styling the window header with the code

**\--cm-header-padding** - this CSS variable is responsible for the "padding" for the header of the window with the code.

**\--cm-header-font-size** - this CSS variable is responsible for the "font-size" for the header of the window with the code.

**\--cm-header-color** - this CSS variable is responsible for the color of the header of the window with the code.

### Stylization of line numbers

**\--cm-count-bg** - this CSS variable is responsible for the "background" for line numbers.

**\--cm-count-color** - this CSS variable is responsible for the text color for line numbers.

**\--cm-count-padding** - this CSS variable is responsible for the "paddings" for line numbers.

**\--cm-count-border-right** - this CSS variable is responsible for the color of the right "border" for line numbers.

### Stylization of "copy code" icons

In this section, we will talk about the styling of the "copy code" icons. I have implemented 3 states. This is the normal state, the state when an error occurred while copying the code to the clipboard, and the state when the code was successfully copied to the clipboard. I have 3 different icons for all these states. Here you will learn how to change the color of these icons. If you insert your pictures through the slots, then this block will not help you. I have these icons implemented via SVG, I just change them to "fill".

**\--cm-icon-color** - this CSS variable is responsible for the color of the "copy code" icon.

**\--cm-icon-error-color** - this CSS variable is responsible for the color of the "copy code" icon if an error has occurred.

**\--cm-icon-is-copy-color** - this CSS variable is responsible for the color of the "copy code" icon when the code has been successfully copied to the clipboard.

### Styling the active line

**\--cm-active-bg** - this CSS variable is responsible for the "background" of the active line.

**\--cm-active-count-bg** - this CSS variable is responsible for the background of the line number of the active line.

**\--cm-active-count-color** - this CSS variable is responsible for the color of the row number in the active row.

**\--cm-active-count-right-color** - this CSS variable is responsible for the color of the right "border" line number of the active line.

### Stylization "lines of code"

This section is dedicated to the styling of "lines of code". I will put the styling of the active line in a separate block, here I will describe the styles for new, modified, and deleted lines. In fact, there won't be many styles here, mostly the colors of the borders of the line numbers.

**\--cm-new-border** - for new lines, I make a vertical line separating the line numbers from the line text. This CSS variable sets the color of this line. This parameter is closely related to the "new" input parameter for the "code-line" component.

**\--cm-changed-border** - in Visual Studio Code, when any changes occur on a line, it is displayed with a vertical right line that separates the line number and the line text. This CSS variable is responsible for the color of this line. This parameter is associated with the "changed" input parameter for the "code-line" component.

**\--cm-deleted-border** - in order to show that the line has been deleted, I make a vertical line that separates the line numbers from the line text. This CSS variable defines the color of this line. This parameter is closely related to the "deleted" input parameter of the "code-line" component.

**\--cm-deleted-opacity** - this CSS variable is responsible for the transparency of the deleted line. In order to see how it works, you need to add the "deleted" input parameter to the "code-line" component. You can set values from 0 to 1. 0 will make the string completely transparent, you probably won't need it. 1 will make the row fully visible. I recommend setting intermediate values.

### Stylization text selection

This section is dedicated to text selection. In order to see the result of applying styles, you need to select the text in the window with the code. I set the background of the selection and the color of the text when selected.

**\--cm-selection-bg** - this CSS variable is responsible for the "background" of the selection in the window with the code.

**\--cm-selection-color** - this CSS variable is responsible for the "color" of the text when selected in the window with the code.

### Styling the scrollbar

**\--cm-scroll-bar-bg** - This CSS variable is responsible for the "background" of the scrollbar.

**\--cm-thumb-bg** - this CSS variable is responsible for the background of the scrollbar slider.

### Styling common components

Common components are components that can be used in a block of templates, scripts, and styles. These include components responsible for comments, and components responsible for displaying text and numeric information.

**\--cm-main-color** - this CSS variable is responsible for the default text color. If you insert text without any component, or output it in the "mu-type" component, the value of this variable will be applied.

**\--cm-text-color** - this CSS variable is responsible for the color of the text information, as a rule, it is the text printed between 2 quotation marks. This value will be applied to the "mu-text" component.

**\--cm-number-color** - this CSS variable is responsible for the color of numeric information, usually numbers. This value will be applied to the "mu-number" component.

**\--cm-comment-color** - this CSS variable is responsible for the color of the comments. This value will be applied to the "mu-comment" component.

### Styling the components of the "template" block

This section is devoted to the styling of components that are used in the "template" block. There are only two such components - these are "mu-tag" and "mu-attr". Accordingly, these are tags and their attributes.

**\--cm-tag-color** - this CSS variable is responsible for the color of the tags. This value will be applied to the "mu-tag" component.

**\--cm-attr-color** - this CSS variable is responsible for the color of the tag attribute. This value will be applied to the "mu-attr" component.

### Stylization of the "script" block components

This section is dedicated to the components that are in the "script" block. It's not big either, and it shows how to style JS keywords, variables, function names, and object keys.

**\--cm-key-color** - this CSS variable is responsible for the color of the object's keys. This value will be applied to the "mu-key" component.

**\--cm-key-words-color** - this CSS variable is responsible for the color of keywords. These include language constructs such as let, const, var, function, return, and so on. This value will be applied to the "mu-key-words" component.

**\--cm-variable-color** - this CSS variable is responsible for the color of the variables, they come immediately after the keywords let, const, var. This value will be applied to the "mu-variable" component.

**\--cm-function-color** - this CSS variable is responsible for the color of the function name. This value will be applied to the "mu-function" component.

### Stylization of the "style" block components

This section is devoted to the styling of the components that are used in the "style" block. This is probably the largest section. In most themes, there is no particular difference between the "id" of an element and its class. If it is important for you to distinguish between class and "id", then this section will describe how to set different colors for these elements. All CSS variables in this section contain the prefix "style" so that they can be distinguished from other components.

**\--cm-style-class** - this CSS variable is responsible for the color of the class. This value will be applied to the "mu-style-class" component.

**\--cm-style-id** - this CSS variable is responsible for the color of the id. This value will be applied to the "mu-style-id" component.

**\--cm-style-tag** - данная CSS переменная отвечает за цвет тега. Это значение будет применено к компоненту "mu-style-tag".

**\--cm-style-param** - this CSS variable is responsible for the color of the CSS parameters. This value will be applied to the "mu-style-param" component.

**\--cm-style-key** - this CSS variable is responsible for the color of nested rules. This value will be applied to the "mu-style-key" component.

**\--cm-style-unit-mes** - this CSS variable is responsible for the color of the units of measurement. This value will be applied to the "mu-style-unit-meas" component.

**\--cm-style-ampersand** - this CSS variable is responsible for the color of the ampersand. This value will be applied to the "mu-style-ampersand" component.

**\--cm-style-curly-brace** - this CSS variable is responsible for the color of the curly braces. This value will be applied to the "mu-style-curly-brace" component.

### Components for the script block

I will keep a change log starting from version "0.5.0". In this version, I made the input parameter "theme" for the "code-markup" component. In this version, I have implemented 2 themes: "darcula" and "monokai". The "darcula" theme was the default, I made the "monokai" theme.