const oldCopyText = (code) => {
  try {
    const textArea = document.createElement('textarea');

    textArea.value = code;

    textArea.setAttribute('readonly', '');
    textArea.style.position = 'absolute';
    textArea.style.left = '-10000px';
    textArea.style.top = '-10000px';

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');

    document.body.removeChild(textArea);
  } catch (error) { return error }
}

const prepareCode = (code) => {
  let codeForCopy = code;

  const isObject = code !== null && typeof code === 'object';
  const isOtherType = !isObject && (typeof code !== 'string') && (code !== undefined);

  if (isObject) codeForCopy = JSON.stringify(code, null, 2);
  if (isOtherType) codeForCopy = String(code);
  if (code === undefined) codeForCopy = '';

  return codeForCopy;
}

const copyCode = async (code) => {
  const codeForCopy = prepareCode(code);

  const isNewCopy = navigator?.clipboard?.writeText;

  try {
    if (!isNewCopy) oldCopyText(codeForCopy);
    if (isNewCopy) await navigator.clipboard.writeText(codeForCopy);
  } catch (error) { throw error }
}

export default copyCode;