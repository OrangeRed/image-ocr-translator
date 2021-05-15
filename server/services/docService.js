
const createDoc = (ocrData, lang) => {
  const document = {
    "translateLang": lang,
    "originalLang": ocrData.language,
    "lines": ocrData.regions[0].lines
  }

  // TODO: Translate document lines.words
  document.translateLang = lang

  return document
}

export default { createDoc }